import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";
export interface swapType {
  index1: number;
  index2: number;
}
export interface changeType {
  index: number;
  hai: haiType;
}
export interface haiType {
  number: number;
  type: "m" | "p" | "s" | "z";
}
export type haiListState = haiType[];
const haiListSlice = createSlice({
  name: "haiList",
  initialState: [] as haiType[],
  reducers: {
    add: (state, action: PayloadAction<haiType>) => {
      return [...state, action.payload];
    },
    addAll: (state, action: PayloadAction<haiType[]>) => {
      return [...state, ...action.payload];
    },
    change: (state, action: PayloadAction<changeType>) => {
      state[action.payload.index] = action.payload.hai;
    },
    swap: (state, action: PayloadAction<swapType>) => {
      const temp = state[action.payload.index1];
      state[action.payload.index1] = state[action.payload.index2];
      state[action.payload.index2] = temp;
      return [...state];
    },
    remove: (state, action: PayloadAction<number>) => {
      state = state.splice(action.payload, 1);
      return [...state];
    },
    reset: (state) => {
      return [];
    },
    //TODO:ソート機能未実装
    sort: (state) => {
      return state;
    },
  },
});

export const { add, addAll, reset, sort, change, swap } = haiListSlice.actions;

export const haiListSelector = (state: RootState) => state.haiList;

export default haiListSlice.reducer;
