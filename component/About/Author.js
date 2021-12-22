import React from 'react'

import Image from 'next//image'
import config from '../../content/config.json'

export default function Author() {
    const {welcomeContent}=config
    return (
        <div className="mt-24 container">
            <div className="flex justify-center  items-center flex-col mx-auto lg:max-w-full">
               
                <div className="welcomeContent">
                    <Image className="welcomeImage"
                    alt=""
                    src={welcomeContent.image}
                    layout='fill'
                    objectFit="cover">

                    </Image>
                </div>

                <div className="heading sm:text-30px font-medium leading-5 my-12 ">
                    <h3>{welcomeContent.heading}</h3>

                </div>
                <div className="authorDetails">
                    <p className="">{welcomeContent.details}</p>

                </div>
            </div>
            
        </div>
    )
}
