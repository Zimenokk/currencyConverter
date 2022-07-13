import React from 'react';
import styles from './Header.module.scss'
import SvgSelector from "../../components/staticComponents/SvgSelector";
import StaticCourse from "../../components/staticComponents/staticCourse/StaticCourse";

const Header = ({}) => {
    return (
        <header className={styles.header} >
            <section className={"mainContainer"} >
                <SvgSelector id={"headerLogo"}/>
                <div className={styles.staticCourses}>
                    <StaticCourse cc={"USD"} rate={29.25}/>
                    <StaticCourse cc={"EUR"} rate={29.36} />
                </div>
            </section>
        </header>
    );
};

export default Header;
