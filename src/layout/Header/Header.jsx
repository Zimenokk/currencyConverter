import React from 'react';
import styles from './Header.module.scss'
import SvgSelector from "../../components/staticComponents/SvgSelector";
import StaticCourse from "../../components/staticComponents/staticCourse/StaticCourse";

const Header = ({list}) => {
    // const list = useSelector(state=>state.createCurrency.list);

    const dollar = list[26]
    const euro = list[33]


    return (
        <header className={styles.header}>
            <section className={"mainContainer"}>
                <SvgSelector id={"headerLogo"}/>
                <div className={styles.staticCourses}>
                    <StaticCourse cc={"USD"} rate={(dollar?.rate.toFixed(2))}/>
                    <StaticCourse cc={"EUR"} rate={euro?.rate.toFixed(2)}/>
                </div>
            </section>
        </header>
    );
};

export default Header;