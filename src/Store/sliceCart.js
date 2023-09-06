import { createSlice} from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const sliceCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            
            if (itemIndex >= 0 ) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = nextCartItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, removeFromCart } = sliceCart.actions
export default sliceCart.reducer