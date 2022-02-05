import { HaiSelectorPair } from "components/HaiSelectorPair";
import React from "react";
import { MdClose } from "react-icons/md";
import { color } from "assets/color";
import "./HaiSelectPopup.scss";
type HaiProps = {
  type: HaiType;
  number: number;
};
type Props = {
  initHai: HaiProps;
  disable?: boolean;
  onClose?: Function;
  onChange: Function;
};
type HaiType = "m" | "p" | "s" | "z";

const typeList = ["m", "p", "s", "z"] as HaiType[];
const Type2Index = { m: 0, p: 1, s: 2, z: 3 };

export const HaiSelectPopup: React.FC<Props> = ({
  initHai,
  disable = false,
  onClose,
  onChange,
}) => {
  return (
    <>
      {!disable && (
        <div className="Popup__box">
          {onClose && (
            <div className="Popup__close" onClick={() => onClose()}>
              <MdClose size={24} color={color.MainGreen} title="Close Popup!" />
            </div>
          )}
          <div className="Popup__panel">
            <div className="Popup__text">牌の種類を選択</div>
            <HaiSelectorPair initHai={initHai} onChange={onChange} />
          </div>
        </div>
      )}
    </>
  );
};
