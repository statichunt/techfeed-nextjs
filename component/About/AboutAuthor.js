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
        <div>
            <div className={styles.AboutAuthorContent}>
                <div className={styles.aboutImage}>
                   <Image
                   src={data.aboutImage}
                   alt='image'
                   width={100}
                   height={100}
                   ></Image>
                </div>
                
                <div className={styles.authorDetails}>
                    <p>{data.details}</p>
                    <div className={`${styles.aboutLink} ${styles1.continue} `}>
                        <a className={styles1.continueLink} 
                        onClick={()=>{
                            router.push({
                                pathname: '/about',
                                // query: { slug: data.slug }
                            })
                        }}
                        > know more..</a>
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
