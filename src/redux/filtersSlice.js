import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export function selectNameFilter(state) {
  return state.filters.name;
}

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;