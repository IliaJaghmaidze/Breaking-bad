import { createSlice } from "@reduxjs/toolkit";
export const characterSlice = createSlice({
  name: "character",
  initialState: {
    list: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      let index = state.list.findIndex(
        (el) => el.char_id === action.payload.char_id
      );
      if (index === -1)
        return {
          list: [...state.list, action.payload],
        };
      return {
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)],
      };
    },
  },
});

export const { addFavourite } = characterSlice.actions;

export default characterSlice.reducer;
