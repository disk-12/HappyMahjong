import classNames from "classnames";
import { Hai } from "components/Hai";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import ClickAwayListener from "react-click-away-listener";
import "./HaiSelector.scss";
import { color } from "assets/color";

type ItemProps = {
  icon: HaiProps;
  text: string;
};
type HaiProps = {
  type: HaiType;
  number: number;
};
type HaiType = "m" | "p" | "s" | "z";

type WindowProps = {
  isType: boolean;
  type: HaiType;
  selected: number;
  onClick: Function;
  option: boolean;
};

type HaiSelectorProps = {
  isType?: boolean;
  type?: HaiType;
  initSelected: number;
  onChange?: Function;
  option?: boolean;
};

const typeKanji = ["萬子", "筒子", "索子", "字牌"];
const typeList = ["m", "p", "s", "z"] as HaiType[];

const typeObj = { m: "萬", p: "筒", s: "索" };
const jihai = ["東", "南", "西", "北", "白", "發", "中"];
const kansuji = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
const haiString = (type: "m" | "p" | "s" | "z", number: number) =>
  type === "z" ? jihai[number - 1] : kansuji[number - 1] + typeObj[type];
const HaiItem: React.FC<ItemProps> = ({ icon, text }) => {
  return (
    <div className="HaiSelector__label">
      <div className="HaiSelector__icon">
        <Hai {...icon} isIcon />
      </div>
      <div className="HaiSelector__text">{text}</div>
    </div>
  );
};
const HaiSelectorWindow: React.FC<WindowProps> = ({
  isType = false,
  type = "m",
  selected,
  onClick,
  option,
}) => {
  const itemList = [];
  if (isType) {
    typeKanji.forEach((text, index) => {
      itemList.push({ text, icon: { number: 1, type: typeList[index] } });
    });
  } else {
    const maxLoop = type === "z" ? 7 : 9;
    for (var i = 1; i <= maxLoop; i++)
      itemList.push({
        text: haiString(type, i),
        icon: { number: i, type: type },
      });
  }
  return (
    <div
      className={classNames({
        HaiSelector__window: !option,
        "HaiSelector__window--option": option,
      })}
    >
      {itemList.map((x, index) => (
        <div
          className={classNames("HaiSelector__item", {
            "HaiSelector__item--selected": index === selected,
          })}
          onClick={(e) => onClick(index)}
          key={index}
        >
          <HaiItem {...x} />
        </div>
      ))}
    </div>
  );
};

export const HaiSelector: React.FC<HaiSelectorProps> = ({
  isType = false,
  type = "m",
  initSelected,
  onChange,
  option = false,
}) => {
  const [selected, setSelected] = useState(initSelected);
  const [text, setText] = useState(
    isType ? typeKanji[initSelected] : haiString(type, initSelected + 1)
  );
  const [icon, setIcon] = useState(
    (isType
      ? { type: typeList[initSelected], number: 1 }
      : { type, number: initSelected + 1 }) as HaiProps
  );
  const [isShown, setIsShown] = useState(false);

  const onClick = (index: number) => {
    setSelected(index);
    setIcon(
      (isType
        ? { type: typeList[index], number: 1 }
        : { type, number: index + 1 }) as HaiProps
    );
    setText(isType ? typeKanji[index] : haiString(type, index + 1));
    onChange && onChange(index);
  };
  useEffect(() => {
    setSelected(initSelected);
    setText(
      isType ? typeKanji[initSelected] : haiString(type, initSelected + 1)
    );
  }, [type, initSelected, isType]);
  useEffect(() => {
    setIcon(
      (isType
        ? { type: typeList[selected], number: 1 }
        : { type, number: selected + 1 }) as HaiProps
    );
    setText(isType ? typeKanji[selected] : haiString(type, selected + 1));
  }, [type, selected, isType]);
  return (
    <ClickAwayListener onClickAway={() => setIsShown(false)}>
      <div className="HaiSelector__box">
        {isShown && (
          <HaiSelectorWindow
            isType={isType}
            type={type}
            selected={selected}
            onClick={onClick}
            option={option}
          />
        )}
        <div className="HaiSelector__panel" onClick={() => setIsShown(true)}>
          <HaiItem icon={icon} text={text} />
          <div className="HaiSelector__triangle">
            <MdArrowDropDown
              size={24}
              color={color.MainGreen}
              title="Close Popup!"
            />
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};
