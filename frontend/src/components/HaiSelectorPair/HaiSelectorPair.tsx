import { HaiSelector } from "components/HaiSelector/HaiSelector";
import React, { useEffect, useState } from "react";
import "./HaiSelectorPair.scss";
type HaiProps = {
  type: HaiType;
  number: number;
};
type Props = { initHai: HaiProps; onChange: Function; option?: boolean };
type HaiType = "m" | "p" | "s" | "z";

const typeList = ["m", "p", "s", "z"] as HaiType[];
const Type2Index = { m: 0, p: 1, s: 2, z: 3 };
export const HaiSelectorPair: React.FC<Props> = ({
  initHai,
  onChange,
  option = false,
}) => {
  const [type, setType] = useState(initHai.type);
  const [number, setNumber] = useState(initHai.number);

  useEffect(() => {
    setType(initHai.type);
    setNumber(initHai.number);
  }, [initHai, type, number]);

  return (
    <div className="Pair__box">
      <div className="Pair__selector">
        <HaiSelector
          isType
          initSelected={Type2Index[type]}
          option={option}
          onChange={(index: number) => {
            if (index === 3 && number >= 7)
              onChange({ type: typeList[index], number: 1 });
            else onChange({ type: typeList[index], number });
          }}
        />
      </div>
      <div className="Pair__selector">
        <HaiSelector
          type={type}
          initSelected={number - 1}
          option={option}
          onChange={(index: number) => {
            onChange({ type, number: index + 1 });
          }}
        />
      </div>
    </div>
  );
};
