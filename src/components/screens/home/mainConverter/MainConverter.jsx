import React, {useEffect, useState} from 'react';
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'
import {useSelector} from "react-redux";
import {useActions} from "../../../../utils";

const MainConverter = ({list}) => {
    //convert operations




    const {updateCurrFromCountData,updateCurrFromNameData,updateCurrToCountData,updateCurrToNameData}=useActions()
    const currencyStore = useSelector(state=>state.createCurrency)

    function convertEngine(list, value,currencyFromNameData, currencyToNameData){
        const currencyToRate = list.filter(item=>item.cc===currencyToNameData)[0]?.rate;
        const currencyFromRate = list.filter(item=>item.cc===currencyFromNameData)[0]?.rate;
        console.log(currencyToNameData)
        console.log('Значение из инпута'+value)
        console.log("Имя с первого "+currencyToNameData)
        console.log("Имя со второго "+currencyFromNameData)

        return (currencyToRate/currencyFromRate)*value
    }

    function updateFromCount(value){
        updateCurrFromCountData(value)
        updateCurrToCountData(convertEngine(list, value,currencyStore.currToNameData, currencyStore.currFromNameData))

    }
     function updateFromName (value){
         updateCurrFromNameData(value)
         // updateToCount(currencyStore.currToCountData)

        // console.log(currencyStore.currFromNameData)
     }
    function updateToCount(value){
        updateCurrToCountData(value)
        updateCurrFromCountData(convertEngine(list, value, currencyStore.currFromNameData, currencyStore.currToNameData))
    }
    function updateToName(value){
        updateCurrToNameData(value)
        // updateFromCount(currencyStore.currFromCountData)
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
