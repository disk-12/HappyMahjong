import { useAppDispatch } from "app/store";
import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from "react";
import { Camera as ReactCamera, CameraType } from "react-camera-pro";
import { useNavigate } from "react-router-dom";
import { Wrapper, ScreenShot } from "./CameraStyle";
import { setImage } from "app/CameraSlice";

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

const CROP_WIDTH = 512;
const CROP_HEIGHT = 512;

const Component: ForwardRefRenderFunction<CameraHandles> = (_, ref) => {
  const cameraRef = useRef<CameraType>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [url, setUrl] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const capture = () => {
    if (!cameraRef.current) return;
    const imageSrc = cameraRef.current.takePhoto();
    setUrl(imageSrc);
    uploadResizeImage(imageSrc);
  };

  const uploadResizeImage = async (imageSrc: string) => {
    if (!wrapperRef.current) return null;
    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;
    const aspectRatio = height / width;
    const base64 = await cropAndResizeB64(imageSrc, aspectRatio);
    console.log(base64);
    dispatch(setImage(base64 ? base64 : undefined));

    navigate("/check");
  };

  const cropAndResizeB64 = async (
    imgB64_src: string,
    aspectRatio: number
  ): Promise<string | null> => {
    const canvas = document.createElement("canvas");
    canvas.width = CROP_WIDTH;
    canvas.height = CROP_HEIGHT;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const img = await loadImage(imgB64_src);
    const isHorizontaly = aspectRatio < 1.0;

    if (isHorizontaly) {
      const height = CROP_WIDTH * aspectRatio;
      const y = (CROP_HEIGHT - height) / 2;
      ctx.drawImage(img, 0, y, CROP_WIDTH, height);
    } else {
      const width = CROP_HEIGHT / aspectRatio;
      const x = (CROP_WIDTH - width) / 2;
      ctx.drawImage(img, x, 0, width, CROP_HEIGHT);
    }

    const imgType = imgB64_src.substring(5, imgB64_src.indexOf(";"));
    const imgB64_dst = canvas.toDataURL(imgType);
    return imgB64_dst;
  };

  const loadImage = (imgB64_src: string) => {
    return new Promise((resolve: (img: HTMLImageElement) => void, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = imgB64_src;
    });
  };

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
