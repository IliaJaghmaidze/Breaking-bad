import { createSlice } from "@reduxjs/toolkit";
import { ToastBody } from "react-bootstrap";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    value: 0,
    status: false,
    list: [],
  },
  reducers: {
    increment: (state, action) => {
      if (state.status === false) {
        return {
          ...state,
          status: true,
          list: [...state.list, action.payload],
        };
      } else if (state.status === true) {
        return {
          ...state,
          status: false,
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
