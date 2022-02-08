import numpy as np
import os
from xml.etree import ElementTree

class XML_preprocessor(object):

    def __init__(self, data_path):
        self.path_prefix = data_path
        self.num_classes = 34 #クラス数を指定
        self.data = dict()
        self._preprocess_XML()

    def _preprocess_XML(self):
        filenames = os.listdir(self.path_prefix)
        for filename in filenames:
            if filename=='.DS_Store':
                continue
            tree = ElementTree.parse(self.path_prefix + filename)
            root = tree.getroot()
            bounding_boxes = []
            one_hot_classes = []
            size_tree = root.find('size')
            width = float(size_tree.find('width').text)
            height = float(size_tree.find('height').text)
            for object_tree in root.findall('object'):
                for bounding_box in object_tree.iter('bndbox'):
                    xmin = float(bounding_box.find('xmin').text)/width
                    ymin = float(bounding_box.find('ymin').text)/height
                    xmax = float(bounding_box.find('xmax').text)/width
                    ymax = float(bounding_box.find('ymax').text)/height
                bounding_box = [xmin,ymin,xmax,ymax]
                bounding_boxes.append(bounding_box)
                class_name = object_tree.find('name').text
                one_hot_class = self._to_one_hot(class_name)
                one_hot_classes.append(one_hot_class)
            image_name = root.find('filename').text
            bounding_boxes = np.asarray(bounding_boxes)
            one_hot_classes = np.asarray(one_hot_classes)
            image_data = np.hstack((bounding_boxes, one_hot_classes))
            self.data[image_name] = image_data

    def _to_one_hot(self,name):
        one_hot_vector = [0] * self.num_classes
        if name == '1m':
            one_hot_vector[0] = 1
        elif name == '2m':
            one_hot_vector[1] = 1
        elif name == '3m':
            one_hot_vector[2] = 1
        elif name == '4m':
            one_hot_vector[3] = 1
        elif name == '5m':
            one_hot_vector[4] = 1
        elif name == '6m':
            one_hot_vector[5] = 1
        elif name == '7m':
            one_hot_vector[6] = 1
        elif name == '8m':
            one_hot_vector[7] = 1
        elif name == '9m':
            one_hot_vector[8] = 1
        elif name == '1p':
            one_hot_vector[9] = 1
        elif name == '2p':
            one_hot_vector[10] = 1
        elif name == '3p':
            one_hot_vector[11] = 1
        elif name == '4p':
            one_hot_vector[12] = 1
        elif name == '5p':
            one_hot_vector[13] = 1
        elif name == '6p':
            one_hot_vector[14] = 1
        elif name == '7p':
            one_hot_vector[15] = 1
        elif name == '8p':
            one_hot_vector[16] = 1
        elif name == '9p':
            one_hot_vector[17] = 1
        elif name == '1s':
            one_hot_vector[18] = 1
        elif name == '2s':
            one_hot_vector[19] = 1
        elif name == '3s':
            one_hot_vector[20] = 1
        elif name == '4s':
            one_hot_vector[21] = 1
        elif name == '5s':
            one_hot_vector[22] = 1
        elif name == '6s':
            one_hot_vector[23] = 1
        elif name == '7s':
            one_hot_vector[24] = 1
        elif name == '8s':
            one_hot_vector[25] = 1
        elif name == '9s':
            one_hot_vector[26] = 1
        elif name == 'east':
            one_hot_vector[27] = 1
        elif name == 'south':
            one_hot_vector[28] = 1
        elif name == 'west':
            one_hot_vector[29] = 1
        elif name == 'north':
            one_hot_vector[30] = 1
        elif name == 'haku':
            one_hot_vector[31] = 1
        elif name == 'hatsu':
            one_hot_vector[32] = 1
        elif name == 'chun':
            one_hot_vector[33] = 1
        else:
            print('unknown label: %s' %name)
        
        return one_hot_vector


import pickle
data = XML_preprocessor('/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Xml_Output/').data
pickle.dump(data,open('/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/mahjongpie.pkl','wb'))