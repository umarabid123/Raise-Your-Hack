import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '@/components/shared/types'

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart: (state, action: PayloadAction<Product>) => {
  const existing = state.cartItems.find(item => item.id === action.payload.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cartItems.push({ ...action.payload, quantity: 1 });
  }
},
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
