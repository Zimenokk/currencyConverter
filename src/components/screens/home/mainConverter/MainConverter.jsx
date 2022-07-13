import React from 'react';
import ConvertItem from "./convertItem/ConvertItem";
import styles from './MainConverter.module.scss'


const MainConverter = () => {
    //convert operations


    return (
        <div className={styles.mainConverter}>
            <ConvertItem action={"Віддаю"} currencyName={"Українська гривня"}/>
            <ConvertItem action={"Отримую"} currencyName={"Американський доллар"}/>
        </div>
    );
};

export default MainConverter;
