import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, add, reset, addAll } from "../../app/HaiListSlice";
import "./Check.scss";
import { HaiSelectPopup } from "components/HaiSelectPopup";
interface Props {}

export const Check: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const haiList = useAppSelector(haiListSelector);

  useEffect(() => {
    dispatch(reset());
    dispatch(
      addAll([
        { number: 1, type: "m" },
        { number: 2, type: "m" },
        { number: 3, type: "m" },
        { number: 4, type: "m" },
        { number: 6, type: "m" },
        { number: 7, type: "m" },
        { number: 8, type: "m" },
        { number: 9, type: "m" },
        { number: 2, type: "p" },
        { number: 3, type: "p" },
        { number: 4, type: "p" },
        { number: 5, type: "m" },
      ])
    );
  }, []);

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
