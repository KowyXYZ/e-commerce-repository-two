import { createSlice, current } from "@reduxjs/toolkit";


const sliceAuthReg = createSlice({
    name: 'auth',
    initialState: {
        accounts: localStorage.getItem('authAcc') ? JSON.parse(localStorage.getItem('authAcc')) : [],
        currentAccount: {
            username: '',
            favList: [],
        },
        currentLoginStatus: 'off'
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

        validateAccount: (state, action) => {
            if(state.accounts.find(user => user.username === action.payload.username) &&
            state.accounts.find(user => user.password === action.payload.password)) {
                state.currentAccount.username = action.payload.username
                state.currentLoginStatus = 'on'
            } else {
                console.log('Wrong username or password or maybe account doesnt exists')
            }
        }

    }
})

export const { storeAccount, validateAccount } = sliceAuthReg.actions
export default sliceAuthReg.reducer