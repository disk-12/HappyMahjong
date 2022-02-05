import { FC, useRef } from "react";
import {Wrapper, CameraWrapper} from './CameraPageStyle'
import { Camera, CameraHandles } from "./components/Camera";

interface Props {}

export const CameraPage: FC<Props> = () => {
  const cameraRef = useRef<CameraHandles>(null);

  const takeCapture = () => {
    cameraRef.current?.capture();
  }

  const switchCamera = () => {
    cameraRef.current?.switchCamera();
  }

  return (
    <Wrapper>
      <CameraWrapper>
        <Camera id={'222'} ref={cameraRef}></Camera>
      </CameraWrapper>
      {/* <ul>
        {haiList.map((x) => (
          <li>
            {x.number}
            {x.type}
          </li>
        ))}
      </ul> */}
      <button onClick={() => takeCapture()}>
        写真
      </button>
      <button onClick={() => switchCamera()}>
        変更
      </button>
    </Wrapper>
  );
};
