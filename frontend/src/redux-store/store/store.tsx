import { configureStore } from "@reduxjs/toolkit";
 
import ToggleArrow from "@/redux-store/slices/toggle-arrow"
import filterSlice from "@/redux-store/slices/filter-slice";
import cartReducer from "@/redux-store/slices/cartSlice"
 


const store = configureStore({
  reducer: {
    slider: ToggleArrow,
    filter: filterSlice,
    cart: cartReducer,
  }  
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;