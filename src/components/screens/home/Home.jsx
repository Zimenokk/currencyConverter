import React from 'react';
import Layout from "../../../layout/Layout";
import MainConverter from "./mainConverter/MainConverter";

const Home = () => {
    return (
        <Layout>
            <h1>Конвертуйте на здоров’я &#128184;</h1>
            <MainConverter/>
        </Layout>
    );
};

export default Home;
