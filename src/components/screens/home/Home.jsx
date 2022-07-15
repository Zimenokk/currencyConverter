import React from 'react';
import Layout from "../../../layout/Layout";
import MainConverter from "./mainConverter/MainConverter";
import styles from './Home.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {useActions} from "../../../utils";

const Home = () => {

    const {updateList}=useActions();

    useEffect(() => {
        axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`).then(res => {
            updateList(res.data)
        })
    }, []);



    return (
        <Layout>
            <div className={styles.home}>
                <h1>Конвертуйте на здоров’я &#128184;</h1>
                <MainConverter/>
            </div>

        </Layout>
    );
};

export default Home;
