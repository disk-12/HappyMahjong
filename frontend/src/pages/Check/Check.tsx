import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, add } from "../../app/HaiListSlice";
import "./Check.scss";
interface Props {}

export const Check: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);
  return (
    <>
      <h1>確認画面</h1>
      <p>ここは確認画面です．</p>
      haiList: {haiList.map((x) => x)}
      <br />
      <button onClick={() => dispatch(add("1m"))}>1m追加</button>
      <br />
      <Link to="/result">点数画面へ遷移</Link>
    </>
  );
};
