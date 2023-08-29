import { configureStore } from "@reduxjs/toolkit";
import sliceStyling from "./sliceStyling";

const store = configureStore({
    reducer: {
      styling: sliceStyling
    }
})

export default store