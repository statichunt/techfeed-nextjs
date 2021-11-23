import React from 'react'

import Image from 'next//image'

export default function Author() {
    return (
        <div className="my-6">
            <div className="flex justify-center items-center flex-col w-1/2 mx-auto">
                <div className="w-52 h-authorImage relative">
                    <Image className="rounded-full"
                    alt=""
                    src='/image/author.jpg'
                    layout='fill'
                    >

                    </Image>
                </div>

                <div className="heading ">
                    <h1>WELCOME TO MY BLOG</h1>

                </div>
                <div className="
                font-lora
                italic
                md:text-xl
                text-xl
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
