import React from "react";
import "./Top.scss";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { haiListSelector, add } from "../../app/HaiListSlice";
import { Link } from "react-router-dom";
import { Hai } from "components/Hai";
import { HaiSelector } from "components/HaiSelector/HaiSelector";
import { MdOutlineCameraAlt } from 'react-icons/md';
import { color } from "assets/color";
interface Props {}

export const Top: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  const haiList = useAppSelector(haiListSelector);

  console.log(haiList);
  return (
    <>
      <h1>撮影画面</h1>
      <p>ここは撮影画面です．</p>
      haiList:
      <ul>
        {haiList.map((x) => (
          <li>
            {x.number}
            {x.type}
          </li>
        ))}
      </ul>
      <br />
      <button onClick={() => dispatch(add({ number: 1, type: "m" }))}>
        1m追加
      </button>
      <br />
      <Link to="/check">確認画面へ遷移</Link>
      <Hai type="s" number={1}></Hai>
      <HaiSelector isType initSelected={0} />
      <HaiSelector type="m" initSelected={0} />
      <MdOutlineCameraAlt size={32} color={color.MainGreen} title="Take picture!"/>
    </>
  );
};
