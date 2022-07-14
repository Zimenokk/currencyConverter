import React, {useEffect, useState} from 'react';
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {
    updateCurrencyFromCode,
    updateCurrencyFromCount,
    updateCurrencyToCode,
    updateCurrencyToCount
} from "../../../../store/updateCurrencySlice";

const MainConverter = () => {
    //convert operations
    const [data, setData] = useState([{r030: 1, txt: 'Українська гривня', rate: 1, cc: 'UAH', exchangedate: ''}])
    useEffect(() => {
        axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`).then(res => {
            setData(state=>[...state, ...res.data])
        })
    }, []);

    console.log(data)


    const [fromCountData, setFromCountData] = useState(0)
    const [fromNameData, setFromNameData] = useState('')
    const [toCountData, setToCountData] = useState(0);
    const [toNameData, setToNameData] = useState(0);

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
                         currencyObjectData={data}
            />
            {/*<ConvertItem*/}
            {/*    action={"Отримую"}*/}
            {/*    currencyName={"Американський доллар"}*/}
            {/*    inputCountData={toCountData}*/}
            {/*    setInputCountData={setToCountData}*/}
            {/*    inputNameData={toNameData}*/}
            {/*    setInputNameData={setToNameData}*/}
            {/*/>*/}
        </div>
    );
};

export default MainConverter;
