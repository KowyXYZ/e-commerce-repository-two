import { createSlice } from "@reduxjs/toolkit";

const sliceSearch = createSlice({
    name: 'search',
    initialState: {
        searchText: localStorage.getItem('searchingtext') ? JSON.parse(localStorage.getItem('searchingtext')) : ''
    },
    reducers: {
        getSearchText: (state, action) => {
            state.searchText = action.payload
            localStorage.setItem('searchingtext', JSON.stringify(state.searchText))
        }
    }
})

export const { getSearchText} = sliceSearch.actions
export default sliceSearch.reducer