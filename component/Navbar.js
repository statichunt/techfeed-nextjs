import styles from '../styles/Nav.module.css'

function Navbar() {
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>Features</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}>Pages</li>
                    <li className={styles.navItem}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
