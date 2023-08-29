import { createSlice } from "@reduxjs/toolkit";

const sliceStyling = createSlice ({
    name: 'styling',
    initialState: {
        status: 'grid'
    },
    reducers: {
        getStatus: (state, action) => {
            state.status = action.payload
       
        }
    }
})

export const {getStatus} = sliceStyling.actions
export default sliceStyling.reducer