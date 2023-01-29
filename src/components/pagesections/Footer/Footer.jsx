import { ReactComponent as Facebook } from "../../../images/icon/fb.svg";
import { ReactComponent as Tweeter } from "../../../images/icon/tweeter.svg";
import { ReactComponent as Youtube } from "../../../images/icon/youtube.svg";
import { ReactComponent as In } from "../../../images/icon/in.svg";



import styles from "./Footer.module.scss"


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_iconConainer}>
                <a href="https://facebook.com/" className={styles.footer_link}><Facebook className={styles.footer_icon} /></a>
                <a href="https://twitter.com/" className={styles.footer_link}><Tweeter className={styles.footer_icon} /></a>
                <a href="https://www.youtube.com/" className={styles.footer_link}><Youtube className={styles.footer_icon} /></a>
                <a href="https://about.linkedin.com/" className={styles.footer_link}><In className={styles.footer_icon} /></a>

            </div>


            <p className={styles.footer_license}>Copyright © 2021 - FinanceLedger</p>
        </footer>
    );
};