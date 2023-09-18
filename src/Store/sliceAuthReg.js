import { createSlice } from "@reduxjs/toolkit";


const sliceAuthReg = createSlice({
    name: 'auth',
    initialState: {
        accounts: localStorage.getItem('authAcc') ? JSON.parse(localStorage.getItem('authAcc')) : [],
        currentAccount: localStorage.getItem('currentAccount') ? JSON.parse(localStorage.getItem('currentAccount')) : {
            username: '',
            favList: [],
        },
        currentLoginStatus: localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')) : 'off',
        errorStatus: false
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
                state.errorStatus = false
                state.currentAccount.username = action.payload.username
                state.currentLoginStatus = 'on'
                localStorage.setItem('loginStatus', JSON.stringify(state.currentLoginStatus))
                localStorage.setItem('currentAccount', JSON.stringify(state.currentAccount))
            } else {
                state.errorStatus = true
                console.log('Wrong username or password or maybe account doesnt exists')
            }
        },

        logOut: (state, action) => {
            state.currentLoginStatus = 'off'
            localStorage.setItem('loginStatus', JSON.stringify(state.currentLoginStatus))
        },

        addfavList(state, action) {
            const itemIndex = state.currentAccount.favList.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0) {
                console.log('Item is already on your fav list')
            } else {
                state.currentAccount.favList.push(action.payload)
            }
            localStorage.setItem('currentAccount', JSON.stringify(state.currentAccount))

        },

        removefavList(state, action) {
            const delItem = state.currentAccount.favList.filter((item) => item.id !== action.payload.id)
            state.currentAccount.favList = delItem
            localStorage.setItem('currentAccount', JSON.stringify(state.currentAccount))
        }

    }
})

export const { storeAccount, validateAccount, logOut, addfavList, removefavList } = sliceAuthReg.actions
export default sliceAuthReg.reducer