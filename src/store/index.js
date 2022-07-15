import {configureStore} from '@reduxjs/toolkit'
import updateCurrencySlice from "./updateCurrencySlice";



export default configureStore({
    reducer: {
        createCurrency: updateCurrencySlice,
    }
})