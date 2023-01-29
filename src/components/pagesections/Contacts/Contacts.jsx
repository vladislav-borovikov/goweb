import person1 from '../../../images/images/team/person1.jpg'
import person2 from '../../../images/images/team/person2.jpg'
import person3 from '../../../images/images/team/person3.jpg'
import styles from './Contacts.module.scss'
import { ReactComponent as Facebook } from "../../../images/icon/fb.svg";
import { ReactComponent as Tweeter } from "../../../images/icon/tweeter.svg";
import { ReactComponent as Youtube } from "../../../images/icon/youtube.svg";
import { ReactComponent as In } from "../../../images/icon/in.svg";


export const Contacts = () => {
    return (
        <div id="contacts" className={styles.contacts}>
            <p className={styles.contacts_paragraph} >Who we are</p>
            <h2 className={styles.contacts_title}>Our Professional Team</h2>
            <p className={styles.contacts_paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={styles.contacts_list}>
                <li className={styles.contacts_listItem}>
                    <div className={styles.card}>
                        <img src={person1} alt="person1" />
                        <div className={styles.overlay}>
                            <ul className={styles.card_iconList}>
                                <li className={styles.card_iconListItem}><a href="https://facebook.com/"><Facebook className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://twitter.com/"><Tweeter className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://www.youtube.com/"><Youtube className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://about.linkedin.com/"><In className={styles.card_svg} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className={styles.contacts_personName} >John Doe</h4>
                    <p className={styles.contacts_paragraph}>President</p>
                </li>
                <li className={styles.contacts_listItem}>
                    <div className={styles.card}>
                        <img src={person2} alt="person2" />
                        <div className={styles.overlay}>
                            <ul className={styles.card_iconList}>
                                <li className={styles.card_iconListItem}><a href="https://facebook.com/"><Facebook className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://twitter.com/"><Tweeter className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://www.youtube.com/"><Youtube className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://about.linkedin.com/"><In className={styles.card_svg} /></a></li>
                            </ul>

                        </div>
                    </div>

                    <h4 className={styles.contacts_personName}>Jane Doe</h4>
                    <p className={styles.contacts_paragraph}>Vice President</p>
                </li>
                <li className={styles.contacts_listItem}>
                    <div className={styles.card}>
                        <img src={person3} alt="person3" />
                        <div className={styles.overlay}>
                            <ul className={styles.card_iconList}>
                                <li className={styles.card_iconListItem}><a href="https://facebook.com/"><Facebook className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://twitter.com/"><Tweeter className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://www.youtube.com/"><Youtube className={styles.card_svg} /></a></li>
                                <li className={styles.card_iconListItem}><a href="https://about.linkedin.com/"><In className={styles.card_svg} /></a></li>
                            </ul>

                        </div>

                    </div>
                    <h4 className={styles.contacts_personName}>Steve Smith</h4>
                    <p className={styles.contacts_paragraph}>Marketing Head</p>
                </li>
            </ul>
        </div>

    );
};