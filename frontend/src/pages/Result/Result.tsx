import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/store";
import { haiListSelector, haiListState } from "../../app/HaiListSlice";
import "./Result.scss";
import { optionSelector, OptionState } from "app/OptionSlice";
import Riichi from "riichi";
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { MdOutlineCameraAlt } from "react-icons/md";

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

  return (
    <>
      {JSON.stringify(result)}
      <Link to="/"></Link>
      <Button to="/">
        <MdOutlineCameraAlt size={24}/>
        <ButtonText>新しく牌を撮る</ButtonText>
      </Button>
    </>
  );
};
