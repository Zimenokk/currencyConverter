import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className="mainContainer">
                <p>Made by <a target={"_blank"} href="https://zimenokkcv.vercel.app/">Zimenokk</a></p>
                <p>2022</p>
            </section>

        </footer>
    );
};

export default Footer;
