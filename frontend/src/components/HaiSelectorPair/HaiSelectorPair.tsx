import { HaiSelector } from "components/HaiSelector/HaiSelector";
import React, { useState } from "react";
import "./HaiSelectorPair.scss";
type HaiProps = {
  type: HaiType;
  number: number;
};
type Props = { initHai: HaiProps };
type HaiType = "m" | "p" | "s" | "z";

const typeList = ["m", "p", "s", "z"] as HaiType[];
const Type2Index = { m: 0, p: 1, s: 2, z: 3 };
export const HaiSelectorPair: React.FC<Props> = ({ initHai }) => {
  const [type, setType] = useState(initHai.type);
  const [number, setNumber] = useState(initHai.number);
  return (
    <div className="Pair__box">
      <div className="Pair__selector">
        <HaiSelector
          isType
          initSelected={Type2Index[type]}
          onChange={(index: number) => setType(typeList[index])}
        />
      </div>
      <div className="Pair__selector">
        <HaiSelector
          type={type}
          initSelected={number - 1}
          onChange={(index: number) => setNumber(index + 1)}
        />
      </div>
    </div>
  );
};
