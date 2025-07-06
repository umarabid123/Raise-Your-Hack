import { createSlice } from "@reduxjs/toolkit";

 
const sliderSlice = createSlice({
  name: "slider",

  initialState:{
    startIndex : 0 ,
  },

  reducers: {
    setIndex: (state , action) => {
      state.startIndex = action.payload;
    },

    increment : (state) =>{
      state.startIndex +=1 ;
    },

    decrement : (state) =>{
      state.startIndex -= 1 ;
    }

  },
});

export const { setIndex , increment , decrement } = sliderSlice.actions;
export default sliderSlice.reducer;
