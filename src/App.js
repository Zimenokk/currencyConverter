import Home from "./components/screens/home/Home";
import {CurrenciesContext} from './context'
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

function App() {
    const [currencies, setCurrencies]=useState([{r030: 1, txt: 'Українська гривня', rate: 1, cc: 'UAH', exchangedate: ''}])

    useEffect(() => {
        axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`).then(res => {
            setCurrencies(state=>[...state, ...res.data])
        })
    }, []);


    return (
        <div className="App">
            <CurrenciesContext.Provider value={{currencies, setCurrencies}}>
                <Home/>
            </CurrenciesContext.Provider>
        </div>
    );
}

export default App;
