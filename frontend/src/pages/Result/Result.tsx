// libraries
import React, { useEffect, useState } from "react";
import Riichi from "riichi";
import { MdArrowForward, MdCalculate, MdOutlineCameraAlt } from "react-icons/md";
// components
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { Hai } from "components/Hai";
// state
import { useAppSelector } from "app/store";
import { haiListSelector, haiListState } from "app/HaiListSlice";
import { optionSelector, OptionState } from "app/OptionSlice";
// style
import { HaiBox, HaiContainer, YakuContainer, YakuBox, ResultContainer, ResultBox, FuAndHan, Ten, ButtonContainer } from "./ResultStyle";
import { color } from "assets/color";

interface Props {}
interface ResultState {
  isAgari: boolean;
  yakuman: number;
  yaku: { [name: string]: string };
  han: number;
  fu: number;
  ten: number;
  name: string;
  text: string;
  oya: number[];
  ko: number[];
  error: boolean;
}
const convert = (haiList: haiListState, option: OptionState) => {
  return "112233456789m11s";
};

export const Result: React.FC<Props> = () => {
  const haiList = useAppSelector(haiListSelector);
  const option = useAppSelector(optionSelector);
  const [result, setResult] = useState<ResultState | null>(null);

  useEffect(() => {
    const riichi = new Riichi(convert(haiList, option));
    setResult(riichi.calc());
  }, [haiList, option]);

  const yakuList = result ? Object.entries(result.yaku).map(([name, han]) => ({name, han})) : []

  return (
    <>
      {JSON.stringify(result)}
      <HaiContainer>
        {haiList.map((hai, i) => (
          <HaiBox key={i}>
            <Hai {...hai} />
          </HaiBox>
        ))}
      </HaiContainer>
      { result && (
         <>
            <YakuContainer>
              {yakuList.map((yaku, i) => (
                <YakuBox key={i}>
                  <span>{yaku.name}</span>
                  <span>{yaku.han}</span>
                </YakuBox>
              ))}
            </YakuContainer>
            <ResultContainer>
              <ResultBox>
                <MdCalculate 
                  size={32}
                  color={color.Black}
                />
                <FuAndHan>{result.fu}符{result.han}飜</FuAndHan>
                <MdArrowForward
                  size={32}
                  color={color.Black}
                />
                <Ten>{result.ten}<span>点</span></Ten>
              </ResultBox>
            </ResultContainer>
          </>
        )
      }
      <ButtonContainer>
        <Button to="/">
          <MdOutlineCameraAlt size={24}/>
          <ButtonText>新しく牌を撮る</ButtonText>
        </Button>
      </ButtonContainer>
    </>
  );
};
