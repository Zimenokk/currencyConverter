import { createSlice } from '@reduxjs/toolkit'

export const updateCurrencySlice = createSlice({
    name: 'createCurrency',
    initialState: {
        currFromCountData: 0,
        currFromNameData: "UAH",
        currToCountData: 0,
        currToNameData:"USD",
        list:[{r030: 1, txt: 'Українська гривня', rate: 1, cc: 'UAH', exchangedate: ''}],
        selectedFrom:{r030: 1, txt: 'Українська гривня', rate: 1, cc: 'UAH', exchangedate: ''},
        selectedTo:{},

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
        updateList:(state, action)=>{
            state.list=state.list.concat(action.payload)
        }
    }
})

export default updateCurrencySlice.reducer
export const {  updateCurrFromCountData, updateCurrFromNameData,updateCurrToCountData, updateCurrToNameData} = updateCurrencySlice.actions
export const updateCurrencyActions = updateCurrencySlice.actions;
