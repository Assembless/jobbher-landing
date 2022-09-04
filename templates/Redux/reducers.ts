/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type T{{pascalCase name}}State = {
  example: number;
}

const initialState: T{{pascalCase name}}State = { example: 0 };

const increment = (
  state: T{{pascalCase name}}State,
  action: PayloadAction<T{{pascalCase name}}State['example']>,
) => {
  state.example += 1;
};

const {{name}}Slice = createSlice({
  name: `{{name}}`,
  initialState,
  reducers: {
    increment,
  },
});

export const reducerKey = {{name}}Slice.name;
export const {{name}}Actions = {{name}}Slice.actions;
export default {{name}}Slice.reducer;