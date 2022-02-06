import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, haiListState } from "../../app/HaiListSlice";
import "./Result.scss";
import { optionSelector, OptionState } from "app/OptionSlice";
import Riichi from "riichi";
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
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);
  const option = useAppSelector(optionSelector);
  const [result, setResult] = useState<ResultState | null>(null);
  useEffect(() => {
    const riichi = new Riichi(convert(haiList, option));
    setResult(riichi.calc());
  }, []);
  return (
    <>
      {JSON.stringify(result)}
      <Link to="/">撮影画面へ遷移</Link>
    </>
  );
};
