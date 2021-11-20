import Image from 'next/image'
import styles from '../../styles/about.module.css'
import * as marked from 'marked'

function AboutData({data}) {
    
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.AboutDataImage}>
                <Image
                alt=""
                src={data.frontmatter.aboutImage}
                layout='fill'
                ></Image>
            </div>
            <div className={styles.aboutName}>
                <h3>{data.frontmatter.name}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: marked(data.content) }} className={styles.content}>

            </div>
            
        </div>
    )
}

export default AboutData

