import random
import cv2
import defusedxml.ElementTree as ET
import xml.etree.ElementTree


#牌画像があるディレクトリ
pieimagepatharr = [
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/1m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/1p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/1s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/2m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/2p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/2s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/3m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/3p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/3s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/4m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/4p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/4s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/5m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/5p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/5s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/6m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/6p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/6s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/7m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/7p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/7s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/8m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/8p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/8s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/9m.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/9p.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/9s.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/chun.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/east.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/haku.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/hatsu.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/north.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/south.png",
"/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Hai/west.png"
]





for p in range(100):

    #画像出力先パス
    outputimagepath = "/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/ImageGenerate_Output/annotaion_image_{}.jpg".format(p)

    #xml出力先パス
    outputxmlpath=  "/Users/hayafune/開発/ハッピー麻雀/HappyMahjong/SSD/Dataset/Xml_Output/annotaion_xml_{}.xml".format(p)

    xml_content = []

    xml_content.append("<annotation>\n")
    xml_content.append("  <folder>XXX</folder>\n")
    xml_content.append("  <filename>{}</filename>\n".format(outputimagepath[73:]))
    xml_content.append("  <source>\n")
    xml_content.append("    <database>XXX</database>\n")
    xml_content.append("    <annotation>XXX</annotation>\n")
    xml_content.append("    <image>XXX</image>\n")
    xml_content.append("    <flickrid>XXX</flickrid>\n")
    xml_content.append("  </source>\n")
    xml_content.append("  <size>\n")
    xml_content.append("    <width>{}</width>\n".format(512))
    xml_content.append("    <height>{}</height>\n".format(512))
    xml_content.append("    <depth>{}</depth>\n".format(3))
    xml_content.append("  </size>\n")
    xml_content.append("  <segmented>{}</segmented>\n".format(0))


    background_image = cv2.imread("/Users/hayafune/Desktop/ハッピー麻雀/麻雀牌/mat.jpeg")

    for i in range(9):
        x = random.randint(0,33)
        piekindname = pieimagepatharr[x]
        piekindname = piekindname[56:-4]
     
        #牌の写真
        pie_image = cv2.imread(pieimagepatharr[x])
        height, width,_ = pie_image.shape
        nowx = 31+width*(i)
        nowy = 222

        xml_content.append("  <object>\n")
        xml_content.append("    <name>{}</name>\n".format(piekindname))
        xml_content.append("    <pose>Unspecified</pose>\n")
        xml_content.append("    <truncated>0</truncated>\n")
        xml_content.append("    <difficult>1</difficult>\n")
        xml_content.append("    <bndbox>\n")
        xml_content.append("      <xmin>{}</xmin>\n".format(nowx))
        xml_content.append("      <ymin>{}</ymin>\n".format(nowy))
        xml_content.append("      <xmax>{}</xmax>\n".format(nowx+width))
        xml_content.append("      <ymax>{}</ymax>\n".format(nowy+height))
        xml_content.append("    </bndbox>\n")
        xml_content.append("  </object>\n")

        p = str(p)
        background_image[nowy:nowy+height, nowx:nowx + width] = pie_image
        cv2.imwrite(outputimagepath, background_image)
    

    xml_content.append("</annotation>\n")
    pg = ''.join(xml_content)
    root = ET.fromstring(pg)
    tree = xml.etree.ElementTree.ElementTree(root)
    tree.write(outputxmlpath, encoding='utf-8')
