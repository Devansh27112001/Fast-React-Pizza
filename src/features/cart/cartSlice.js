import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    // Just for development purposes. a fake cart entry has been created.
    // cart: [
    //     {
    //         pizzaId: 12,
    //         name: 'Mediteranean',
    //         quantity: 2,
    //         unitPrice: 16,
    //         totalPrice: 32,
    //     },
    // ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = id of the pizza --> pizzaId
            state.cart = state.cart.filter(
                (item) => item.pizzaId != action.payload
            );
        },
        increaseItemQuantity(state, action) {
            //  Here the find method will return a single object corresponding to the pizzaId. But this item is referring to the same 'cart' object. So any changes that we perform on this item variable will also mutate our original 'cart' variable. Thereby, the quantity updates in the cart for a particular pizza.
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );
            item.quantity++;
            item.totalPrice = item.unitPrice * item.quantity;
        },
        decreaseItemquantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );
            item.quantity--;
            item.totalPrice = item.unitPrice * item.quantity;
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemquantity,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

// If you use { } braces, then it is required to write return keyword for the state.cart.cart....
export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
