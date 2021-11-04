import React from 'react'
import styles from '../styles/Post.module.css'
import Image from 'next//image'

export default function Author() {
    return (
        <div className={styles.authorContainer}>
            <div className={styles.authorItem}>
                <div className={styles.authorImage}>
                    <Image className={styles.imageSize}
                    alt=""
                    src='/image/author.jpg'
                    layout='fill'
                    >

                    </Image>
                </div>

                <div className={styles.authorHeader}>
                    <h1>WELCOME TO MY BLOG</h1>

                </div>
                <div className={styles.authorDetails}>
                    <p>My name is Linda Smith. I am a writer, I like to travel and I love to photograph beautiful nature places and happy peoples.</p>

                </div>
            </div>
            
        </div>
    )
}
