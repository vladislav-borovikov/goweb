import styles from "./Header.module.scss"
import { ReactComponent as Logo } from "../../../images/icon/logo.svg";
import { Link } from "react-scroll";

export const Header = () => {
    window.addEventListener('scroll', function () {
        window.scrollY ?
            document.getElementById('menu').style = 'background-color: rgba(0, 0, 0, 0.4)' :
            document.getElementById('menu').style = 'background-color: none '

    });






    return (
        <header className={styles.header} id="menu">
            <div className={styles.logo}>
                <Logo id={"logo"} className={styles.svg} /><span className={styles.logo_firstPart}>Finance</span><span className={styles.logo_secondPart}>Ledger</span>
            </div>
            <ul className={styles.header_blockList}>
                <li className={styles.header_blockList_item}><Link to="home" activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>Home</Link></li>
                <li className={styles.header_blockList_item}><Link to="about" activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>About</Link></li>
                <li className={styles.header_blockList_item}><Link to="cases" activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>Cases</Link></li>
                <li className={styles.header_blockList_item}><Link to="blog" activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>Blog</Link></li>
                <li className={styles.header_blockList_item}><Link to="contacts" activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>Contacts</Link></li>
            </ul>
        </header>
    );
};