import { createSlice } from "@reduxjs/toolkit";
import { ToastBody } from "react-bootstrap";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    value: 0,
    condition: false,
    list: [],
  },
  reducers: {
    increment: (state, action) => {
      if (state.condition === false) {
        return {
          ...state,
          action: true,

          list: [...state.list, action.payload],
        };
      } else if (state.condition === true) {
        return {
          ...state,
          condition: false,
          list: state.list.filter((item) => item !== action.payload),
        };
      }
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementByAmount } = characterSlice.actions;

export default characterSlice.reducer;
