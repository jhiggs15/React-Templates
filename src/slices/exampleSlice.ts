import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  value: number
}

const initialState = {
  value: 0,
} as ExampleState;

export const exampleSlice = createSlice({
  name: "example slice",
  initialState,
  reducers: {
    setExampleState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { setExampleState, increment, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;