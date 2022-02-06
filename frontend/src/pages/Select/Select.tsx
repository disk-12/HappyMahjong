import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector } from "../../app/HaiListSlice";
import { setLastIndex } from "../../app/OptionSlice";
import { Hai } from "components/Hai";
import {
  CheckPage,
  HaiBox,
  HaiContainer,
  Img,
  LinkContainer,
  PopupContainer,
  PopupSpace,
  TextPopup,
  Triganle,
} from "./SelectStyle";
import { HelpMessage } from "components/HelpMessage";
import { optionSelector } from "app/OptionSlice";

interface Props {}
interface HaiState {
  type: "m" | "p" | "s" | "z";
  number: number;
}

export const Select: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);
  const option = useAppSelector(optionSelector);
  const [selected, setSelected] = useState(-1);

  return (
    <CheckPage>
      <Img src="/testimg.png" />
      <HaiContainer>
        {haiList.map((hai, i) => (
          <HaiBox key={i}>
            <div
              onClick={() => {
                setSelected(i);
                dispatch(setLastIndex(i));
                console.log("Select.tsx onClick:" + i);
              }}
            >
              <Hai {...hai} />
            </div>
            <div
              style={{
                visibility: selected == i ? "visible" : "hidden",
              }}
            >
              <Triganle />
              <TextPopup>和了牌</TextPopup>
            </div>
          </HaiBox>
        ))}
      </HaiContainer>
      <LinkContainer>
        <Link to="/option">オプションへ遷移{option.lastIndex}</Link>
      </LinkContainer>
      <HelpMessage page="select" />
    </CheckPage>
  );
};
