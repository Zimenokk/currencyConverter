import { createContext, useContext } from 'react'

export const CurrenciesContext = createContext({
    currencies: [],
    setCurrencies: () => {},
})

export const useCurrenciesContext = () => useContext(CurrenciesContext)