import { forwardRef, useRef, useState, useCallback, useImperativeHandle, ForwardRefRenderFunction } from "react";
import  { Camera as ReactCamera, CameraType}  from  'react-camera-pro' ;
import { Wrapper, ScreenShot } from './CameraStyle'

export interface CameraHandles {
  capture: () => void
  switchCamera: () => void
}

const errorMessages = {
  noCameraAccessible: 'カメラデバイスにアクセスできません。カメラを接続するか、別のブラウザでお試しください。',
  permissionDenied: 'アクセス許可が拒否されました。更新してカメラのアクセスを許可してください。',
  switchCamera:
  'アクセス可能なビデオデバイスが1つしかないため、カメラを別のものに切り替えることはできません。',
  canvas: 'Canvasが対応していません。'
}

const Component: ForwardRefRenderFunction<CameraHandles> = (_, ref) => {
  const cameraRef = useRef<CameraType>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [url, setUrl] = useState<string | undefined>(undefined)

  const capture = useCallback(() => {
    if (!cameraRef.current) return
    const imageSrc = cameraRef.current.takePhoto()
    setUrl(imageSrc)
  }, [cameraRef])

  const switchCamera = useCallback(() => {
    if (!cameraRef.current) return
    cameraRef.current.switchCamera()
  }, [cameraRef])

  useImperativeHandle(ref, () => ({
    capture,
    switchCamera
  }));

  return (
    <Wrapper ref={wrapperRef}>
      <ReactCamera ref={cameraRef} facingMode='environment' errorMessages={errorMessages}/>
      {url && <ScreenShot src={url} alt="Screenshot" />}
    </Wrapper>
  );
};

export const Camera = forwardRef(Component);
