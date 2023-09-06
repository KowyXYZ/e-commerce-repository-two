import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
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

            
        }
    }
})

export const { addToCart } = sliceCart.actions
export default sliceCart.reducer