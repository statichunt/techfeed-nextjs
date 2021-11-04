import styles from '../styles/Nav.module.css'

function Navbar() {
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={`${styles.navItem} ${styles.active} ${styles.dropDownContainer}`} >
                        
                        Home
                        <div className={styles.dropDown}>
                            <ul className={styles.dropDownMenu} >
                                <li className={styles.dropDownItem}>Home 0</li>
                                <li className={styles.dropDownItem}>Home 0</li>
                                <li className={styles.dropDownItem}>Home 0</li>


                            </ul>
                        </div>
                        </li>
                    <li className={styles.navItem}>Features</li>
                    <li className={styles.navItem}>About</li>
                    <li className={`${styles.navItem} ${styles.dropDownContainer}`}>Pages
                    <div className={styles.dropDown}>
                            <ul className={styles.dropDownMenu} >
                                <li className={styles.dropDownItem}>Page 0</li>
                                <li className={styles.dropDownItem}>Page 0</li>
                                <li className={styles.dropDownItem}>Page 0</li>


                            </ul>
                        </div>
                    </li>
                    <li className={styles.navItem}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
