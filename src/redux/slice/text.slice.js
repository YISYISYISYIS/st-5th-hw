import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};

const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    addText: (prevState, action) => {
      prevState.texts.push(action.payload);
      localStorage.setItem("texts", JSON.stringify(prevState.texts));
    },
  },
});

export const { setTexts, addText } = textsSlice.actions;
export const textReducer = textsSlice.reducer;
export default textReducer;
