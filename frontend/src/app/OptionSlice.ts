import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {haiType} from "./HaiListSlice";
import {RootState} from "./store";

export interface OptionState{
  riichi:boolean,
  ippatsu:boolean,
  chankan:boolean,
  rinshan:boolean,
  houtei:boolean,
  haitei:boolean,
  dora:haiType[]
}

const optionSlice = createSlice({
  name: "option",
  initialState: {
    riichi:false,
    ippatsu:false,
    chankan:false,
    rinshan:false,
    houtei:false,
    haitei:false,
    dora:[]
  } as OptionState,
  reducers: {
    addDora:(state, action:PayloadAction<haiType>) => {
      state.dora = [...state.dora,action.payload]
      return {...state};
    },
    removeDora:(state, action:PayloadAction<number>) => {
      state.dora = state.dora.splice(action.payload,1);
      return {...state};
    },
    switchRiichi:(state) => {
      return {...state,riichi:!state.riichi};
    },
    switchIppatsu:(state) => {
      return {...state,ippatsu:!state.ippatsu};
    },
    switchChankan:(state) => {
      return {...state,chankan:!state.chankan};
    },
    switchRinshan:(state) => {
      return {...state,rinshan:!state.rinshan};
    },
    switchHoutei:(state) => {
      return {...state,houtei:!state.houtei};
    },
    switchHaitei:(state) => {
      return {...state,haitei:!state.haitei};
    },
  }
});

export const { addDora,removeDora,switchRiichi,switchIppatsu,switchChankan,switchRinshan,switchHoutei,switchHaitei} = optionSlice.actions;

export const optionSelector = (state: RootState) => state.opiton;

export default optionSlice.reducer;