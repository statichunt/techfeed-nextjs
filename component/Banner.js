import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Banner=()=> {

  
    return (
        <>
        <div className={styles.banner}>
  
        <div className={styles.bannerImage}>
        <Image
          alt=""
          src='/banner.jpg'
          layout='fill'
          objectFit='cover'
          />
        </div>

      <div className={styles.bannerContent}>
      <div className={styles.logo}>
        <Image
          alt=""
          src='/logo.png'
         height={100}
         width={200}
        
          
          />
        </div>
        <div className={styles.subHEading}>
          <p>Beautiful, Elegant and Vintage-inspired premium blog and portfolio theme.</p>
        </div>
      </div>
          

        </div>

     

        
        </>
    )
 
  
}

export default Banner
