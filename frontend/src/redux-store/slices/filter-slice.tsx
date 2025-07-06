import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  category: string | null;
  priceRange: [number, number];
  rating: number;
  open: boolean;
  sections: {
    sortBy: boolean;
    price: boolean;
    size: boolean;
  };
}

const initialState: FilterState = {
  category: null,
  priceRange: [0, 10000],
  rating: 0,
  open: false,
  sections: {
    sortBy: false,
    price: false,
    size: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: { payload: string | null }) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action: { payload: [number, number] }) => {
      state.priceRange = action.payload;
    },
    toggleFilter: (state) => {
      state.open = !state.open;
    },
    toggleFilterSection: (
      state,
      action: { payload: keyof FilterState["sections"] }
    ) => {
      const section = action.payload;
      state.sections[section] = !state.sections[section];
    },
  },
});

export const { setCategory, setPriceRange, toggleFilter, toggleFilterSection } =
  filterSlice.actions;

export default filterSlice.reducer;
