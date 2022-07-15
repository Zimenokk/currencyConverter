import React from 'react';
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'
import {useSelector} from "react-redux";
import {useActions} from "../../../../utils";

const MainConverter = ({list}) => {

    const {updateCurrFromCountData,updateCurrFromNameData,updateCurrToCountData,updateCurrToNameData}=useActions()
    const currencyStore = useSelector(state=>state.createCurrency)

    function convertEngine(list, value,currencyFromNameData, currencyToNameData){
        const currencyToRate = list.filter(item=>item.cc===currencyToNameData)[0]?.rate;
        const currencyFromRate = list.filter(item=>item.cc===currencyFromNameData)[0]?.rate;
        console.log(currencyToNameData)

        return ((currencyToRate/currencyFromRate)*value).toFixed(2)
    }

    function updateFromCount(value){
        updateCurrFromCountData(value)
        updateCurrToCountData(convertEngine(list, value,currencyStore.currToNameData, currencyStore.currFromNameData))

    }
     function updateFromName (value){
         updateCurrFromNameData(value)
     }
    function updateToCount(value){
        updateCurrToCountData(value)
        updateCurrFromCountData(convertEngine(list, value, currencyStore.currFromNameData, currencyStore.currToNameData))
    }
    function updateToName(value){
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
