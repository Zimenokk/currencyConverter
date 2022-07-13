import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from './Layout.module.scss'
import '../assets/styles/globals.scss'
import MainConverter from "../components/screens/home/mainConverter/MainConverter";

const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={"mainContainer"}>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
