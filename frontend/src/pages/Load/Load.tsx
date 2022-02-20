import { cameraSelector } from "app/CameraSlice";
import { useAppDispatch, useAppSelector } from "app/store";
import React, { useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

import { useNavigate } from "react-router-dom";
import { add, haiListSelector, reset } from "app/HaiListSlice";
interface Props {}

const THRESHOLD = 0.5;

const maxIndex2 = (a: number[]): number => {
  return a.indexOf(Math.max(...a));
};
function convertIdToHaiType(id: number): {
  type: "m" | "p" | "s" | "z";
  number: number;
} {
  const type = id <= 8 ? "m" : id <= 17 ? "s" : id <= 26 ? "p" : "z";
  const number = (id % 9) + 1;
  return { type, number };
}
export const Load: React.FC<Props> = () => {
  const camera = useAppSelector(cameraSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function run(x: tf.Tensor) {
    const model = await tf.loadGraphModel("/model.json");

    (async () => {
      await model.executeAsync(x).then((y) => {
        const result = y as tf.Tensor<tf.Rank>[];
        const [confidence] = result[0].arraySync() as Array<Array<number>>;
        const [type] = result[2].arraySync() as Array<Array<Array<number>>>;
        console.log(confidence);
        dispatch(reset());
        let success = 0;
        for (let i = 0; i < confidence.length; i++) {
          console.log(confidence[i]);
          if (confidence[i] > THRESHOLD) {
            dispatch(add(convertIdToHaiType(maxIndex2(type[i]))));
            success++;
          } else break;
        }
        for (let i = 0; i < 14 - success; i++)
          dispatch(add({ type: "m", number: 1 }));
        navigate("/check");
      });
    })();
  }

  useEffect(() => {
    const base64 = camera.base64String;
    if (base64) {
      const image = new Image();
      image.src = base64;
      image.width = 512;
      image.height = 512;

      let tensor = tf.browser.fromPixels(image, 3);
      tensor = tf.image.resizeBilinear(tensor, [512, 512]);
      const x = tensor.reshape([1, 512, 512, 3]).asType("int32");

      run(x);
    } else navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera.base64String]);
  return <div>計算中</div>;
};
