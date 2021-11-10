import styles from '../styles/Nav.module.css'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'


function Navbar() {
    const router=useRouter()
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                 
                 <li className={`${styles.navItem} ${styles.dropDownContainer}`} 
                    
                    >
                        
                        <Link href='/'><a className={styles.active} >Home</a></Link>
                        <div className={styles.dropDown}>
                            <ul className={styles.dropDownMenu} >
                                <li className={styles.dropDownItem}>Home 0</li>
                                <li className={styles.dropDownItem}>Home 0</li>
                                <li className={styles.dropDownItem}>Home 0</li>


                            </ul>
                        </div>
                        </li>
                 
                    <li className={styles.navItem}><a>Features</a></li>
                    <li className={styles.navItem}
                  
                   
                  >
                      <Link href='/about'><a >About</a></Link>
                  </li>
                    <li className={`${styles.navItem} ${styles.dropDownContainer}`}><a>Pages</a>
                    <div className={styles.dropDown}>
                            <ul className={styles.dropDownMenu} >
                                <li className={styles.dropDownItem}>Page 0</li>
                                <li className={styles.dropDownItem}>Page 0</li>
                                <li className={styles.dropDownItem}>Page 0</li>


                            </ul>
                        </div>
                    </li>
                    <li className={styles.navItem}><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
