import classNames from "classnames";
import { HaiSelectorPair } from "components/HaiSelectorPair";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import "./HaiSelectPopup.scss";
type HaiProps = {
  type: HaiType;
  number: number;
};
type Props = { initHai: HaiProps };
type HaiType = "m" | "p" | "s" | "z";

const typeList = ["m", "p", "s", "z"] as HaiType[];
const Type2Index = { m: 0, p: 1, s: 2, z: 3 };

export const HaiSelectPopup: React.FC<Props> = ({ initHai }) => {
  return (
    <div className="Popup__box">
      <div className="Popup__panel">
        <div className="Popup__text">牌の種類を選択</div>
        <HaiSelectorPair initHai={initHai} />
      </div>
    </div>
  );
};
