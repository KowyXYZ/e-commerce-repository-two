import { createSlice } from "@reduxjs/toolkit";


const sliceAuthReg = createSlice({
    name: 'auth',
    initialState: {
        accounts: []
    },
    reducers: {
        storeAccount: (state, action) => {
            const tempAcc = action.payload
            state.accounts.push(tempAcc)
        }
    }
})

export const { storeAccount } = sliceAuthReg.actions
export default sliceAuthReg.reducer