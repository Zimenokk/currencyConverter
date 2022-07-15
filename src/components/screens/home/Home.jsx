import React from 'react';
import Layout from "../../../layout/Layout";
import MainConverter from "./mainConverter/MainConverter";
import styles from './Home.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

    const [list, setList] = useState([{r030: 1, txt: 'Українська гривня', rate: 1, cc: 'UAH', exchangedate: ''}]);

    useEffect(() => {
        axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`).then(res => {
            setList(state => [...state, ...res.data])
        })
    }, []);

    return (
        <Layout list={list}>
            <div className={styles.home}>
                <h1>Конвертуйте на здоров’я &#128184;</h1>
                <MainConverter list={list}/>
            </div>

        </Layout>
    );
};

export default Home;
