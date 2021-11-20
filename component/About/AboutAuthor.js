import Link from 'next/dist/client/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/about.module.css'
import styles1 from '../../styles/Post.module.css'
import { IconData } from '../IconData'


function AboutAuthor({data,x}) {
    console.log(x)

    const router = useRouter()
    console.log(data)
    return (
        <div className={styles.aboutContainer} >
              <p className={styles.aboutHeading}>PUBLISHED BY JOHN WOOD</p>
            <div className={styles.AboutAuthorContent}>
            <div className={styles.aboutImage}>
                    <Image className={styles.imageResize}
                    alt=""
                    src={data.aboutImage}
                    layout='fill'
                    >

                    </Image>
                </div>
                
                <div className={styles.authorDetails}>
                  
                    <p>{data.details}</p>
                    <div className={`${styles.aboutLink} `}>
                        <Link href='/about'><a className={styles1.continueLink} 
                     
                     > know more..</a></Link>
                    </div>
                    <div className={styles.socialLink }>
                        {

                            IconData.map(icon=><div key={icon.class}><a className={styles.authorIcon}>{icon.icon}</a></div>)

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor
