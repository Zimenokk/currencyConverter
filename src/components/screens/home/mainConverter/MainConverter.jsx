import React, {useEffect, useState} from 'react';
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'
import {
    updateCurrencyFromCode,
    updateCurrencyFromCount,
    updateCurrencyToCode,
    updateCurrencyToCount
} from "../../../../store/updateCurrencySlice";
import {useCurrenciesContext} from "../../../../context";

const MainConverter = () => {
    //convert operations
    let {currencies} = useCurrenciesContext();
    console.log(currencies)

    const [fromCountData, setFromCountData] = useState(0)
    const [fromNameData, setFromNameData] = useState('')
    const [toCountData, setToCountData] = useState(0);
    const [toNameData, setToNameData] = useState('');

    let consoleOb = [fromCountData, fromNameData, toCountData, toNameData]
    console.log(consoleOb)

    // const currencyStoreSelector = useSelector(state=>state.createCurrency)
    // console.log(currencyStoreSelector)

    updateCurrencyFromCount(fromCountData)
    updateCurrencyFromCode(fromNameData)
    updateCurrencyToCount(toCountData)
    updateCurrencyToCode(toNameData)

    return (
        <div className={styles.mainConverter}>
            <ConvertItem action={"Віддаю"}
                         currencyName={"Українська гривня"}
                         inputCountData={fromCountData}
                         setInputCountData={setFromCountData}
                         inputNameData={fromNameData}
                         setInputNameData={setFromNameData}
                         currencyObjectData={currencies}
            />
            <ConvertItem
                action={"Отримую"}
                currencyName={"Американський доллар"}
                inputCountData={toCountData}
                setInputCountData={setToCountData}
                inputNameData={toNameData}
                setInputNameData={setToNameData}
                currencyObjectData={currencies}
            />
        </div>
    );
};

export default MainConverter;
