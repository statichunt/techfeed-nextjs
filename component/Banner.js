import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AiOutlineInstagram,AiOutlineDribbble}from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'



const Banner=()=> {

  
    return (
        <>
        <div className={styles.banner}>
  
        <div className={styles.bannerImage}>
        <Image
          alt=""
          src='/image/banner.jpg'
          layout='fill'
          objectFit='cover'
          />
        </div>

      <div className={styles.bannerContent}>
      <div className={styles.logo}>
        <Image
          alt=""
          src='/logo.png'
         height={160}
         width={310}
        
          
          />
        </div>
        
          <p className={styles.subHEading}>Beautiful, Elegant and Vintage-inspired premium blog and portfolio theme.</p>
        
        <div className={styles.socialIcon}>

          <div className={styles.mediaIcon}><a href="#" className={styles.icon}><FaFacebookF></FaFacebookF></a></div>
          <div className={styles.mediaIcon}><a href="#" className={styles.icon}><FiTwitter></FiTwitter></a></div>
          <div className={styles.mediaIcon}><a href="#" className={styles.icon}><AiOutlineInstagram></AiOutlineInstagram></a></div>
          <div className={styles.mediaIcon}><a href="#" className={styles.icon}><AiOutlineDribbble></AiOutlineDribbble></a></div>
          

        </div>
      </div>
      <div className={styles.overlay}></div>
          

        </div>

     

        
        </>
    )
 
  
}

export default Banner
