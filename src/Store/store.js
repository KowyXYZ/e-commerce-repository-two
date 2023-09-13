import { configureStore } from "@reduxjs/toolkit";
import sliceStyling from "./sliceStyling";
import sliceCart from "./sliceCart";
import sliceSearch from "./sliceSearch";
import sliceAuthReg from "./sliceAuthReg";

const store = configureStore({
    reducer: {
      styling: sliceStyling,
      cart: sliceCart,
      srch: sliceSearch,
      auth: sliceAuthReg
    }
})

export default store