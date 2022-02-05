import { FC, useRef } from "react";
import {Wrapper, CameraWrapper} from './CameraPageStyle'
import { Camera, CameraHandles } from "./components/Camera";

export const CameraPage: FC = () => {
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
        <Camera ref={cameraRef} />
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
