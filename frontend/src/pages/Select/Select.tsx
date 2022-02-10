import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector } from "../../app/HaiListSlice";
import { setLastIndex } from "../../app/OptionSlice";
import { Hai } from "components/Hai";
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { MdNavigateNext } from "react-icons/md";
import {
  CheckPage,
  HaiBox,
  HaiContainer,
  Img,
  LinkContainer,
  TextPopup,
  Triganle,
} from "./SelectStyle";
import { HelpMessage } from "components/HelpMessage";
import { optionSelector } from "app/OptionSlice";

interface Props {}

export const Select: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);
  const option = useAppSelector(optionSelector);
  const [selected, setSelected] = useState(-1);
  console.log(option.lastIndex)

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
                visibility: selected === i ? "visible" : "hidden",
              }}
            >
              <Triganle />
              <TextPopup>和了牌</TextPopup>
            </div>
          </HaiBox>
        ))}
      </HaiContainer>
      <LinkContainer>
        <Button to="/option">
          <ButtonText>オプションへ</ButtonText>
          <MdNavigateNext size={24}/>
        </Button>
      </LinkContainer>
      <HelpMessage page="select" />
    </CheckPage>
  );
};
