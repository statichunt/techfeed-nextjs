import React from 'react'

import Image from 'next//image'
import { author } from '../../config/author'

export default function Author() {
    return (
        <div className="mt-24">
            <div className="flex justify-center items-center flex-col w-4/5 mx-auto">
               
                <div className="welcomeContent">
                    <Image className="welcomeImage"
                    alt=""
                    src={author.image}
                    layout='fill'
                    objectFit="cover">

                    </Image>
                </div>

                <div className="heading sm:text-30px font-medium leading-5 my-8 ">
                    <h1>{author.heading}</h1>

                </div>
                <div className="
                font-lora
                italic
                text-lg
                sm:text-xl
                text-center
              md:w-9/12
              w-full
                
                ">
                    <p className="md:px-12">{author.details}</p>

                </div>
            </div>
            
        </div>
    )
}
