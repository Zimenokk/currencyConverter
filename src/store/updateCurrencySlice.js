import { createSlice } from '@reduxjs/toolkit'

export const updateCurrencySlice = createSlice({
    name: 'createCurrency',
    initialState: {
        currFromCountData: 0,
        currFromNameData: "USD",
        currToCountData: 0,
        currToNameData:"UAH",
    },
    reducers: {
        updateCurrFromCountData: (state, action) => {
            state.currFromCountData = action.payload
        },
        updateCurrFromNameData: (state, action) => {
            state.currFromNameData = action.payload
        },
        updateCurrToCountData: (state, action) => {
            state.currToCountData = action.payload
        },
        updateCurrToNameData: (state, action) => {
            state.currToNameData = action.payload
        },

    }
})

export default updateCurrencySlice.reducer
export const {  updateCurrFromCountData, updateCurrFromNameData,updateCurrToCountData, updateCurrToNameData} = updateCurrencySlice.actions
export const updateCurrencyActions = updateCurrencySlice.actions;
