import { configureStore } from "@reduxjs/toolkit";
import sliceStyling from "./sliceStyling";
import sliceCart from "./sliceCart";

const store = configureStore({
    reducer: {
      styling: sliceStyling,
      cart: sliceCart
    }
})

export default store