import { FC, useRef } from "react";
import { MdOutlineCameraAlt, MdFlipCameraAndroid } from 'react-icons/md';
import { color } from "assets/color";
import { Camera, CameraHandles } from "./components/Camera";
import {
  Wrapper,
  CameraWrapper,
  ButtonWrapper,
  CaptureButton,
  SwitchButton
} from './CameraPageStyle'
import { CameraGuide } from "./components/CameraGuide";

export const CameraPage: FC = () => {
  const cameraRef = useRef<CameraHandles>(null);
  const takeCapture = () => {
    cameraRef.current?.capture();
  };

  const switchCamera = () => {
    cameraRef.current?.switchCamera();
  };

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
      <CameraGuide />
      <ButtonWrapper>
        <SwitchButton onClick={() => switchCamera()}>
          <MdFlipCameraAndroid size={24} color={color.MainGreen} title="Flip camera"/>
        </SwitchButton>
        <CaptureButton onClick={() => takeCapture()}>
          <MdOutlineCameraAlt size={32} color={color.MainGreen} title="Take picture"/>
        </CaptureButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
