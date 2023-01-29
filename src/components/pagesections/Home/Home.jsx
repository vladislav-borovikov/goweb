import styles from "./Home.module.scss"
import { ReactComponent as Arrow } from "../../../images/icon/arrow.svg";

export const Home = () => {
    return (
        <div id="home" className={styles.hero}>

            <h1 className={styles.hero_title}>The Sky Is The Limit</h1>
            <p className={styles.hero_paragraph}>We provide world class financial assistance</p>
            <button type="button" className={styles.hero_button}><span className={styles.button_item}><Arrow className={styles.svg} />Read More</span></button>


        </div>
    );
};