import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./slice/text.slice";

const store = configureStore({
  reducer: {
    //하위저장소: 슬라이스에서 만든 리듀서
    textsPoint: textReducer,
  },
});
export default store;
