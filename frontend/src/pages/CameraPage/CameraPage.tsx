import { FC, useRef } from "react";
import { MdOutlineCameraAlt, MdFlipCameraAndroid } from 'react-icons/md';
import { color } from "assets/color";
import { Camera, CameraHandles } from "./components/Camera";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  CameraWrapper,
  ButtonWrapper,
  CaptureButton,
  SwitchButton
} from './CameraPageStyle'

export const CameraPage: FC = () => {
  const cameraRef = useRef<CameraHandles>(null);
  const navigate = useNavigate();
  const takeCapture = () => {
    cameraRef.current?.capture();

    navigate("/check");
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
