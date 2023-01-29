import People from "../../../images/images/home/people.jpg"

import styles from "./About.module.scss"


export const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div width='300px'>
                <img src={People} alt="our team in office " className={styles.about_img} />
            </div>
            <div className={styles.about_container}>
                <p className={styles.about_paragraph}>What you are looking for</p>
                <h2 className={styles.about_title}>We provide bespoke solutions</h2>
                <p className={styles.about_paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={styles.about_button}>Read More</button>
            </div>
        </div >
    );
};
