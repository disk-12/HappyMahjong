import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from "react";
import { Camera as ReactCamera, CameraType } from "react-camera-pro";
import { Wrapper, ScreenShot } from "./CameraStyle";

export interface CameraHandles {
  capture: () => void;
  switchCamera: () => void;
}

const errorMessages = {
  noCameraAccessible:
    "カメラデバイスにアクセスできません。カメラを接続するか、別のブラウザでお試しください。",
  permissionDenied:
    "アクセス許可が拒否されました。更新してカメラのアクセスを許可してください。",
  switchCamera:
    "アクセス可能なビデオデバイスが1つしかないため、カメラを別のものに切り替えることはできません。",
  canvas: "Canvasが対応していません。",
};

const CROP_WIDTH = 512
const CROP_HEIGHT = 512

const Component: ForwardRefRenderFunction<CameraHandles> = (_, ref) => {
  const cameraRef = useRef<CameraType>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [url, setUrl] = useState<string | undefined>(undefined)

  const capture = () => {
    if (!cameraRef.current) return;
    const imageSrc = cameraRef.current.takePhoto();
    setUrl(imageSrc);
    uploadResizeImage(imageSrc);
  };

  const uploadResizeImage = (imageSrc: string) => {
    if(!wrapperRef.current) return null;
    const width = wrapperRef.current.clientWidth
    const height = wrapperRef.current.clientHeight
    const aspectRatio = height / width
    const base64 = cropAndResizeB64(imageSrc, aspectRatio)
    console.log(base64)

    // TODO: upload data:image/jpeg;base64 file

  }

  const cropAndResizeB64 = (imgB64_src: string, aspectRatio: number): string => {
    return 'data:image/jpeg;base64,xxx...'
  }

  const switchCamera = useCallback(() => {
    if (!cameraRef.current) return;
    cameraRef.current.switchCamera();
  }, [cameraRef]);

  useImperativeHandle(ref, () => ({
    capture,
    switchCamera,
  }));

  return (
    <Wrapper ref={wrapperRef}>
      <ReactCamera
        ref={cameraRef}
        facingMode="environment"
        errorMessages={errorMessages}
      />
      {url && <ScreenShot src={url} alt="Screenshot" />}
    </Wrapper>
  );
};

export const Camera = forwardRef(Component);
