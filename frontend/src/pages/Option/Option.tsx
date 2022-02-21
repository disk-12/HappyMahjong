import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  addDora,
  optionSelector,
  switchChankan,
  switchHaitei,
  switchHoutei,
  switchIppatsu,
  switchRiichi,
  switchRinshan,
  removeDora,
} from "app/OptionSlice";
import {
  AddDora,
  CheckPanel,
  DoraList,
  DoraPanel,
  DoraSelector,
  DoraText,
  LinkContainer,
  OptionPage,
  Panel,
} from "./OptionStyle";
import { HelpMessage } from "components/HelpMessage";
import { CheckBox } from "./components/CheckBox";
import { HaiSelectorPair } from "components/HaiSelectorPair";
import { DoraItem } from "./components/DoraItem";
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { MdAddCircle, MdNavigateNext } from "react-icons/md";
import { color } from "assets/color";

interface Props {}
interface HaiProps {
  type: "m" | "p" | "s" | "z";
  number: number;
}
export const Option: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const option = useAppSelector(optionSelector);
  const [dora, setDora] = useState<HaiProps>({ type: "m", number: 1 });

  return (
    <OptionPage>
      <Panel>
        <CheckPanel>
          <CheckBox
            text="立直（リーチ）"
            checked={option.riichi}
            onClick={() => dispatch(switchRiichi())}
          />
          <CheckBox
            text="嶺上開花（リンシャンカイホウ）"
            checked={option.rinshan}
            onClick={() => dispatch(switchRinshan())}
          />
          <CheckBox
            text="一発（イッパツ）即（ソク）"
            checked={option.ippatsu}
            onClick={() => dispatch(switchIppatsu())}
          />
          <CheckBox
            text="海底摸月（ハイテイモーユエ）"
            checked={option.haitei}
            onClick={() => dispatch(switchHaitei())}
          />
          <CheckBox
            text="槍槓（チャンカン）"
            checked={option.chankan}
            onClick={() => dispatch(switchChankan())}
          />
          <CheckBox
            text="河底撈魚（ホウテイラオユイ）"
            checked={option.houtei}
            onClick={() => dispatch(switchHoutei())}
          />
        </CheckPanel>

        <DoraPanel>
          <DoraSelector>
            <DoraText>ドラを選択</DoraText>
            <HaiSelectorPair
              initHai={dora}
              onChange={(newDora: HaiProps) => setDora(newDora)}
              option={true}
            />
            <AddDora>
              <Button 
                onClick={() => {
                  console.log(option.dora);
                  dispatch(addDora(dora));
                }}
                color={color.Border}
                >
                <MdAddCircle size={24}/>
                <ButtonText>ドラ追加</ButtonText>
              </Button>
            </AddDora>
          </DoraSelector>
          <DoraList>
            {option.dora.map((hai, i) => (
              <div key={i}>
                <DoraItem
                  {...hai}
                  onClick={() => {
                    dispatch(removeDora(i));
                  }}
                />
              </div>
            ))}
          </DoraList>
        </DoraPanel>
      </Panel>
      <LinkContainer>
        <Button to="/result">
          <ButtonText>点数を見る</ButtonText>
          <MdNavigateNext size={24}/>
        </Button>
      </LinkContainer>
      <HelpMessage page="option" />
    </OptionPage>
  );
};
