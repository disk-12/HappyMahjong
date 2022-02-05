import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, add } from "../../app/HaiListSlice";
import "./Check.scss";
import { HaiSelectPopup } from "components/HaiSelectPopup";
interface Props {}

export const Check: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);
  return (
    <>
      <h1>確認画面</h1>
      <p>ここは確認画面です．</p>
      haiList:
      <ul>
        {haiList.map((x) => (
          <li>
            {x.number}
            {x.type}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(add({ number: 1, type: "m" }))}>
        1m追加
      </button>
      <br />
      <Link to="/result">点数画面へ遷移</Link>
      <HaiSelectPopup
        initHai={{ type: "m", number: 1 }}
        onClose={() => console.log("close")}
      />
    </>
  );
};
