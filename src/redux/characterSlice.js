import { createSlice } from "@reduxjs/toolkit";

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
          status: !state.status,
          list: [state, action],
        };
      } else if (state.status === true) {
        return {
          ...state,
          status: !state.status,
          list: [!state],
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
