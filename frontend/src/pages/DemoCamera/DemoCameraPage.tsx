import { FC, useEffect } from "react";
import { MdOutlineCameraAlt, MdFlipCameraAndroid } from "react-icons/md";
import { color } from "assets/color";
import {
  Wrapper,
  CameraWrapper,
  ButtonWrapper,
  CaptureButton,
  SwitchButton,
  DemoImage,
} from "./DemoCameraPageStyle";
import { useAppDispatch, useAppSelector } from "app/store";
import { cameraSelector, setImage } from "app/CameraSlice";
import { useNavigate } from "react-router-dom";

function toDataUrl(url: string, callback: Function) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}

export const DemoCameraPage: FC = () => {
  const { base64String } = useAppSelector(cameraSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    toDataUrl("/images/demo.jpg", (b64: string) => dispatch(setImage(b64)));
  }, [dispatch]);
  return (
    <Wrapper>
      <CameraWrapper>
        {base64String && <DemoImage src={base64String} alt="demoImage" />}
      </CameraWrapper>
      <ButtonWrapper>
        <SwitchButton onClick={() => {}}>
          <MdFlipCameraAndroid
            size={24}
            color={color.MainGreen}
            title="Flip camera"
          />
        </SwitchButton>
        <CaptureButton
          onClick={() => {
            navigate("/load");
          }}
        >
          <MdOutlineCameraAlt
            size={32}
            color={color.MainGreen}
            title="Take picture"
          />
        </CaptureButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
