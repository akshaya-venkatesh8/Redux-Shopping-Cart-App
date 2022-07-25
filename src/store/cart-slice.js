import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQty: 0,
        showCart: false
    },
    //Never run async or HTTPS calls in reducers
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem.id)
            console.log(existingItem);
            if(existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.name,
                    totalPrice: newItem.price
                })
                state.totalQty += 1;
            }
        },
        removeFromCart(state, action) {
            const removeId = action.payload;
            const item = state.itemsList.find((item) => item.id === removeId);
            console.log(item.quantity);
            if(item.quantity === 1) {
                state.itemsList = state.itemsList.filter(t => t.id !== removeId);
            } else {
                item.quantity--;
                item.totalPrice -= item.price;
                // const index = state.itemsList.find((item) => item.id === removeId);
                // state.itemsList[index] = item;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }

});

export const cartActions = cartSlice.actions;
export default cartSlice;