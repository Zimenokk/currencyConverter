import React from 'react';
import {useSelector} from "react-redux";
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'
import {useActions} from "../../../../utils";
import convertEngine from "../../../../utils/convertUpdate";


const MainConverter = ({list}) => {

    const {updateCurrFromCountData, updateCurrFromNameData, updateCurrToCountData, updateCurrToNameData} = useActions()
    const currencyStore = useSelector(state => state.createCurrency)

    function updateFromCount(value) {
        updateCurrFromCountData(value)
        updateCurrToCountData(convertEngine(list, value, currencyStore.currToNameData, currencyStore.currFromNameData))
    }

    function updateFromName(value) {
        updateCurrFromNameData(value)
    }

    function updateToCount(value) {
        updateCurrToCountData(value)
        updateCurrFromCountData(convertEngine(list, value, currencyStore.currFromNameData, currencyStore.currToNameData))
    }

    function updateToName(value) {
        updateCurrToNameData(value)
    }


    return (
        <div className={styles.mainConverter}>
            <ConvertItem action={"Віддаю"}
                         currencyName={"Українська гривня"}
                         inputCountData={currencyStore.currFromCountData}
                         setInputCountData={updateFromCount}
                         inputNameData={currencyStore.currFromNameData}
                         setInputNameData={updateFromName}
                         list={list}
            />
            <ConvertItem
                action={"Отримую"}
                currencyName={"Американський доллар"}
                inputCountData={currencyStore.currToCountData}
                setInputCountData={updateToCount}
                inputNameData={currencyStore.currToNameData}
                setInputNameData={updateToName}
                list={list}
            />
        </div>
    );
};

export default MainConverter;
