import { configureStore } from "@reactjs/toolkit";
import CartSlice from "./slices/CartSlice";

const Store = configureStore({
    reducer : {
        cart : CartSlice,
    },
});

export default Store;