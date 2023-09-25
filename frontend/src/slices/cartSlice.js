import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
	? JSON.parse(localStorage.getItem('cart'))
	: { cartItems: [] };


const cartSlice = createSlice({
	name: 'cart',
	initialState,
	//functions that have to do with the cart functionality and actions
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x._id === item._id);

			if (existItem) {
				state.cartItems = state.cartItems.map((x) =>
					x._id === existItem._id ? item : x
				);
			} else {
				//Can't use .push() because state is immutable. Instead we are making a copy of it by setting state into a new array and then adding the new item.
				state.cartItems = [...state.cartItems, item];
			}

			return updateCart(state);
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
