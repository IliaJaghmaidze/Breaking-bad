import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    value: 0,
    condition: false,
    list: [],
  },
  reducers: {
    increment: (state, action) => {
      if (state.list.includes(action.payload)) {
        return {
          ...state,
          list: state.list.filter((item) => item !== action.payload),
          condition: false,
        };
      } else {
        return {
          ...state,
          list: [...state.list, action.payload],
          condition: true,
        };
      }
    },
    // todos: state.todos.map(todo => todo.id === action.id ?
    //   // transform the one with a matching id
    //   { ...todo, completed: action.completed } :
    //   // otherwise return original todo
    //   todo

    incrementByAmount: (state, action) => {
      // state.value += action.payload;
      return {
        ...state,
        condition: !action.condition,
      };
    },
  },
});

export const { increment, incrementByAmount } = characterSlice.actions;

export default characterSlice.reducer;
