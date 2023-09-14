import { createSlice, current } from "@reduxjs/toolkit";


const sliceAuthReg = createSlice({
    name: 'auth',
    initialState: {
        accounts: localStorage.getItem('authAcc') ? JSON.parse(localStorage.getItem('authAcc')) : []
    },
    reducers: {
        storeAccount: (state, action) => {
            if(state.accounts.find(user => user.username === action.payload.username)){
                console.log('user exists')
            } else {
                state.accounts.push(action.payload)    
                console.log('new user added')
            }
            

            localStorage.setItem('authAcc', JSON.stringify(state.accounts))
        },

    }
})

export const { storeAccount } = sliceAuthReg.actions
export default sliceAuthReg.reducer