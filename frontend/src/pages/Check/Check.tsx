import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, change } from "../../app/HaiListSlice";
import { HaiSelectPopup } from "components/HaiSelectPopup";
import { Hai } from "components/Hai";
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { MdNavigateNext } from "react-icons/md";
import {
  CheckPage,
  HaiBox,
  HaiContainer,
  Img,
  ImgBox,
  LinkContainer,
  PopupContainer,
  PopupSpace,
  Triganle,
} from "./CheckStyle";
import { HelpMessage } from "components/HelpMessage";
import { cameraSelector } from "app/CameraSlice";

interface Props {}
interface HaiState {
  type: "m" | "p" | "s" | "z";
  number: number;
}
export const Check: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);

  const camera = useAppSelector(cameraSelector);
  const [selected, setSelected] = useState(-1);
  const haiRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const getLeft = (selected: number) => {
    const haiWidth = haiRef.current
      ? haiRef.current.getBoundingClientRect().width
      : 0;
    const maxWidth = popupRef.current
      ? popupRef.current.getBoundingClientRect().width
      : 0;
    return Math.min(selected * haiWidth, maxWidth - 512);
  };

  return (
    <CheckPage>
      <ImgBox>
        <Img src={camera.base64String} />
      </ImgBox>

      <HaiContainer>
        {haiList.map((hai, i) => (
          <HaiBox key={i} ref={haiRef}>
            <div onClick={() => setSelected(i)}>
              <Hai {...hai} />
            </div>
            <Triganle
              style={{ visibility: selected === i ? "visible" : "hidden" }}
            />
          </HaiBox>
        ))}
      </HaiContainer>
      <PopupSpace ref={popupRef}>
        <PopupContainer style={{ left: getLeft(selected) }}>
          <HaiSelectPopup
            initHai={
              selected === -1 ? { type: "m", number: 1 } : haiList[selected]
            }
            onClose={() => setSelected(-1)}
            disable={selected === -1}
            onChange={(hai: HaiState) => {
              dispatch(change({ index: selected, hai }));
            }}
          />
        </PopupContainer>
      </PopupSpace>
      <LinkContainer>
        <Button to="/select">
          <ButtonText>和了牌選択へ</ButtonText>
          <MdNavigateNext size={24} />
        </Button>
      </LinkContainer>
      <HelpMessage page="check" />
    </CheckPage>
  );
};
