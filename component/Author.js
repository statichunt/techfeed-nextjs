import React from 'react'

import Image from 'next//image'

export default function Author() {
    return (
        <div className="mt-24">
            <div className="flex justify-center items-center flex-col w-4/5 mx-auto">
                <div className="w-52 h-authorImage relative ">
                    <Image className="rounded-full"
                    alt=""
                    src='/image/01.jpg'
                    layout='fill'
                    objectFit="cover"
                    >

                    </Image>
                </div>

                <div className="heading sm:2xl xl ">
                    <h1>WELCOME TO MY BLOG</h1>

                </div>
                <div className="
                font-lora
                italic
                md:text-xl
                text-xs
                sm:text-sm
                text-center
                px-10
                
                ">
                    <p>My name is Linda Smith. I am a writer, I like to travel and I love to photograph beautiful nature places and happy peoples.</p>

                </div>
            </div>
            
        </div>
    )
}
