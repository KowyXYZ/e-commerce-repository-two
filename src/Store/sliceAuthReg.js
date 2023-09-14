import { createSlice } from "@reduxjs/toolkit";


const sliceAuthReg = createSlice({
    name: 'auth',
    initialState: {
        accounts: []
    },
    reducers: {
        storeAccount: (state, action) => {

            const tempacc = state.accounts.some(item => item.user === action.payload.user);
            if(tempacc === true) {
                console.log('account already exists')
            } else if(tempacc === false){
                console.log('new account added')
                state.accounts.push(action.payload)
            }

        },

    }
})

export const { storeAccount } = sliceAuthReg.actions
export default sliceAuthReg.reducer