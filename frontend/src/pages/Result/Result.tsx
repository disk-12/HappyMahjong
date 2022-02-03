import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, add } from "../../app/HaiListSlice";
import "./Result.scss";

interface Props {}

export const Result: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);
  return (
    <>
      <h1>点数画面</h1>
      <p>ここは点数画面です．</p>
      haiList: {haiList.map((x) => x)}
      <br />
      <button onClick={() => dispatch(add("1m"))}>1m追加</button>
      <br />
      <Link to="/">撮影画面へ遷移</Link>
    </>
  );
};
