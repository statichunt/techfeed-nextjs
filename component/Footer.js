import { useState } from 'react'
import styles from '../styles/Footer.module.css'
import { IconData } from './IconData'


function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socialLink}>
                    {
                        IconData.map(data => <div key={data.class}
                            className="socialLink"
                            


                        ><a  href="#" className={styles.icon} >{data.icon}</a></div>)
                    }

                </div>
                <div className={styles.copyRight}>
                    <p>© 2020, All rights reserved.</p>
                    <p>Design & Develop by <span className={styles.hugo}>GetHugoThemes</span></p>
                </div>
            </div>

        </div>
    )
}

export default Footer
