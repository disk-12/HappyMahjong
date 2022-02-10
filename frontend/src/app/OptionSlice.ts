import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { haiType } from "./HaiListSlice";
import { RootState } from "./store";

export interface OptionState {
  riichi: boolean;
  ippatsu: boolean;
  chankan: boolean;
  rinshan: boolean;
  houtei: boolean;
  haitei: boolean;
  dora: haiType[];
  lastIndex: number;
}

const optionSlice = createSlice({
  name: "option",
  initialState: {
    riichi: false,
    ippatsu: false,
    chankan: false,
    rinshan: false,
    houtei: false,
    haitei: false,
    dora: [],
    lastIndex: -1,
  } as OptionState,
  reducers: {
    addDora: (state, action: PayloadAction<haiType>) => {
      state.dora = [...state.dora, action.payload];
    },
    removeDora: (state, action: PayloadAction<number>) => {
      state.dora.splice(action.payload, 1);
    },
    switchRiichi: (state) => {
      return { ...state, riichi: !state.riichi };
    },
    switchIppatsu: (state) => {
      return { ...state, ippatsu: !state.ippatsu };
    },
    switchChankan: (state) => {
      return { ...state, chankan: !state.chankan };
    },
    switchRinshan: (state) => {
      return { ...state, rinshan: !state.rinshan };
    },
    switchHoutei: (state) => {
      return { ...state, houtei: !state.houtei };
    },
    switchHaitei: (state) => {
      return { ...state, haitei: !state.haitei };
    },
    setLastIndex: (state, action: PayloadAction<number>) => {
      return { ...state, lastIndex: action.payload };
    },
  },
});

export const {
  addDora,
  removeDora,
  switchRiichi,
  switchIppatsu,
  switchChankan,
  switchRinshan,
  switchHoutei,
  switchHaitei,
  setLastIndex,
} = optionSlice.actions;

export const optionSelector = (state: RootState) => state.opiton;

export default optionSlice.reducer;
