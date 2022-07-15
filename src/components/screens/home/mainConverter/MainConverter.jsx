import React, {useEffect} from 'react';
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'
import {useSelector} from "react-redux";
import {useActions} from "../../../../utils";

const MainConverter = () => {
    //convert operations


    const {updateCurrFromCountData,updateCurrFromNameData,updateCurrToCountData,updateCurrToNameData}=useActions()
    const currencyStore = useSelector(state=>state.createCurrency)

    function convertEngine(list, value,currencyToNameData, currencyFromNameData){
        const currencyToRate = list.filter(item=>item.cc===currencyToNameData)[0]?.rate || 1;
        const currencyFromRate = list.filter(item=>item.cc===currencyFromNameData)[0]?.rate || 1;

        return (currencyToRate/currencyFromRate)*value
    }

    function updateFromCount(value){
        updateCurrFromCountData(value)
        // console.log(foo(currencyStore.list, value, currencyStore.currToNameData))
        updateCurrToCountData(convertEngine(currencyStore.list, value, currencyStore.currFromCountData,currencyStore.currToCountData))

    }
     function updateFromName(value){
        updateCurrFromNameData(value)
    }
    function updateToCount(value){
        updateCurrToCountData(value)
        updateCurrFromCountData(convertEngine(currencyStore.list, value, currencyStore.currToCountData,currencyStore.currFromCountData))
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
            />
            <ConvertItem
                action={"Отримую"}
                currencyName={"Американський доллар"}
                inputCountData={currencyStore.currToCountData}
                setInputCountData={updateToCount}
                inputNameData={currencyStore.currToNameData}
                setInputNameData={updateToName}
            />
        </div>
    );
};

export default MainConverter;
