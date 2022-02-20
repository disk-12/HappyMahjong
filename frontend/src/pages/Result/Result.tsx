// libraries
import React, { useEffect, useState } from "react";
import Riichi from "riichi";
import { MdArrowForward, MdCalculate, MdOutlineCameraAlt } from "react-icons/md";
// components
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { Hai } from "components/Hai";
import { ErrorPage } from "components/ErrorPage";
// state
import { useAppSelector } from "app/store";
import { haiListSelector, haiListState, haiType } from "app/HaiListSlice";
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

const convertToText = (haiList: haiListState, option: OptionState): string => {
  console.log(haiList)

  const haiListExceptAgari = haiList.slice(0,-1)
  const agariHaiList = haiList.slice(-1)

  const hai = convertHaiListToText(haiListExceptAgari)
  const agariHai = convertHaiListToText(agariHaiList)
  const agariHaiWithPlus = agariHai && '+' + agariHai
  const dora = convertDoraToText(option.dora)
  const opt = convertOptionToText(option)

  const haiText = hai + agariHaiWithPlus + dora + opt
  console.log(haiText)

  return haiText;
};

const convertHaiListToText = (haiList: haiListState): string => {
  const manz = convertHaiListToTextWithType(haiList, 'm')
  const souz = convertHaiListToTextWithType(haiList, 's')
  const pinz = convertHaiListToTextWithType(haiList, 'p')
  const zihai = convertHaiListToTextWithType(haiList, 'z')
  return manz + souz + pinz + zihai
}

const convertHaiListToTextWithType = (haiList: haiListState, haiType: haiType['type']): string => {
  const haiText = [...haiList].filter(({ type }) => type === haiType ).reduce((sum, current) => {
    return sum + String(current.number)
  }, '')
  return haiText && haiText + haiType
}

const convertDoraToText = (dora: OptionState['dora']): string => {
  if (dora.length === 0) return ''
  return '+d' + convertHaiListToText(dora)
}

const convertOptionToText = (option: OptionState): string => {
  const opt = option.riichi ? 'r' : ''
    + option.ippatsu ? 'i' : ''
    + option.haitei || option.houtei ? 'h' : ''
    + option.chankan || option.rinshan ? 'k' : ''
  return opt && '+' + opt
}

export const Result: React.FC<Props> = () => {
  const haiList = useAppSelector(haiListSelector);
  const option = useAppSelector(optionSelector);
  const [result, setResult] = useState<ResultState | null>(null);

  useEffect(() => {
    const riichi = new Riichi(convertToText(haiList, option));
    setResult(riichi.calc());
    console.log('result', result);
  }, [haiList, option, result]);

  const yakuList = result ? Object.entries(result.yaku).map(([name, han]) => ({name, han})) : []

  const isError = result === null ? true : result.error
  if ( isError ) {
    return (
      <ErrorPage 
        text="エラー：申し訳ありませんが、もう一度やり直してください。"
        to="/"
        toText="トップに戻る"
      />
    )
  }

  if ( !result?.isAgari ) {
    return (
      <ErrorPage 
        text="エラー：和了できない牌です。"
        to="/"
        toText="トップに戻る"
      />
    )
  }

  return (
    <>
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
              <Ten>
                {result.name && result.name + ' '}
                {result.ten}
                <span>点</span>
              </Ten>
            </ResultBox>
          </ResultContainer>
        </>
      )}
      <ButtonContainer>
        <Button to="/">
          <MdOutlineCameraAlt size={24}/>
          <ButtonText>新しく牌を撮る</ButtonText>
        </Button>
      </ButtonContainer>
    </>
  );
};
