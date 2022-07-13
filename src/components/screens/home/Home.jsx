import React from 'react';
import Layout from "../../../layout/Layout";
import MainConverter from "./mainConverter/MainConverter";
import styles from './Home.module.scss'

const Home = () => {
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
