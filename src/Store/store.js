import { configureStore } from "@reduxjs/toolkit";
import sliceStyling from "./sliceStyling";
import sliceCart from "./sliceCart";
import sliceSearch from "./sliceSearch";

const store = configureStore({
    reducer: {
      styling: sliceStyling,
      cart: sliceCart,
      srch: sliceSearch
    }
})

export default store