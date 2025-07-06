import { configureStore } from "@reduxjs/toolkit";
 
import ToggleArrow from "@/redux-store/slices/toggle-arrow"
import filterSlice from "@/redux-store/slices/filter-slice";
 


const store = configureStore({
  reducer: {
 
    slider: ToggleArrow,
    filter: filterSlice
 
  } // Add your reducers here
});

export default store