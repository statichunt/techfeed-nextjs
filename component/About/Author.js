import React from 'react'

import Image from 'next//image'
import { author } from '../../config/author'

export default function Author({aboutData}) {
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

                <div className="heading sm:text-30px font-medium leading-5 my-12 ">
                    <h3>{author.heading}</h3>

                </div>
                <div className="authorDetails">
                    <p className="">{author.details}</p>

                </div>
            </div>
            
        </div>
    )
}
