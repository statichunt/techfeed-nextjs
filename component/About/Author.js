import React from 'react'

import Image from 'next//image'
import { author } from '../../config/author'

export default function Author() {
    return (
        <div className="mt-24">
            <div className="flex justify-center items-center flex-col w-4/5 mx-auto">
                {/* <div className=" ">
                    <Image className="rounded-full"
                    alt=""
                    src={author.image}
                    layout='fill'
                    objectFit="cover"
                    >

                    </Image>
                </div> */}
                <div className="welcomeContent">
                    <Image className="welcomeImage"
                    alt=""
                    src={author.image}
                    layout='fill'
                    objectFit="cover">

                    </Image>
                </div>

                <div className="heading sm:2xl xl ">
                    <h1>{author.heading}</h1>

                </div>
                <div className="
                font-lora
                italic
                md:text-xl
                text-lg
                sm:text-sm
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
