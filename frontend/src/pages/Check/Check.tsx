import React from "react";
import { Link } from "react-router-dom";

import "./Check.scss";
interface Props {}

export const Check: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>確認画面</h1>
      <p>ここは確認画面です．</p>

      <Link to="/result">点数画面へ遷移</Link>
    </>
  );
};
