import { createSlice } from '@reduxjs/toolkit'

export const updateCurrencySlice = createSlice({
    name: 'createCurrency',
    initialState: {
        currencyFromCount: 0,
        currencyFromCode: "",
        currencyToCount:0,
        currencyToCode:""
    },
    reducers: {
        updateCurrencyFromCount: (state, action) => {
            state.currencyCount = action.payload
        },
        updateCurrencyFromCode: (state, action) => {
            state.currencyCode = action.payload
        },
        updateCurrencyToCount: (state, action) => {
            state.currencyToCount = action.payload
        },
        updateCurrencyToCode: (state, action) => {
            state.currencyToCode = action.payload
        }
    }
})

export default updateCurrencySlice.reducer
export const { updateCurrencyFromCount, updateCurrencyFromCode,updateCurrencyToCount, updateCurrencyToCode} = updateCurrencySlice.actions
export const updateCurrencyActions = updateCurrencySlice.actions;
