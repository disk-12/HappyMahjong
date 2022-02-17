import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CameraState {
  base64String:string|undefined
}

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    base64String:undefined
  } as CameraState,
  reducers: {
    setImage: (state, action: PayloadAction<string|undefined>) => {
      state.base64String = action.payload;
    },
    
  },
});

export const {
  setImage
} = cameraSlice.actions;

export const cameraSelector = (state: RootState) => state.camera;

export default cameraSlice.reducer;
