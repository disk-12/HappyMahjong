import { FC, useRef } from "react";
import { MdOutlineCameraAlt, MdFlipCameraAndroid } from 'react-icons/md';
import { color } from "assets/color";
import { Camera, CameraHandles } from "./components/Camera";
import {
  Wrapper,
  CameraWrapper,
  ButtonWrapper,
  CaptureButton,
  SwitchButton,
  HaiGuide,
  HaiGuideWrapper,
  HaiGuideText
} from './CameraPageStyle'
import { CameraGuide } from "./components/CameraGuide";
import { Hai } from "components/Hai";
import { haiType } from "app/HaiListSlice";

export const exampleHaiList: haiType[] = [
  { number: 1, type: 'm' },
  { number: 2, type: 'm' },
  { number: 3, type: 'm' },
  { number: 4, type: 'm' },
  { number: 6, type: 'm' },
  { number: 7, type: 'm' },
  { number: 8, type: 'm' },
  { number: 9, type: 'm' },
  { number: 1, type: 's' },
  { number: 2, type: 's' },
  { number: 3, type: 's' },
  { number: 7, type: 'z' },
  { number: 7, type: 'z' },
  { number: 5, type: 'm' },
]

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
      <HaiGuide>
        <HaiGuideWrapper>
        {exampleHaiList.map((hai, i) => (
            <Hai {...hai} key={i} size={32}/>
          ))}
        </HaiGuideWrapper>
        <HaiGuideText>例のように並べて、枠内に収まるように撮ってください</HaiGuideText>
      </HaiGuide>
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
