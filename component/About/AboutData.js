import Image from 'next/image'

import {marked} from "marked";
import Header from "next/head"

function AboutData({data}) {
    
    return (
        <div className="w-1/2  mx-auto my-32">
            <Header>
                <title>{data.frontmatter.title}</title>
            </Header>
            <div className="w-full h-h200  relative mx-auto">
                <Image
                alt=""
                src={data.frontmatter.aboutImage}
                layout='fill'
                objectFit='cover'
                ></Image>
            </div>
            <div className="text-center ">
            <div className="font-lora text-5xl">
                <h1>{data.frontmatter.about}</h1>
            </div>
            <div className="font-lora text-xl" dangerouslySetInnerHTML={{ __html: marked.parse(data.content) }}>

            </div>
            </div>
            
        </div>
    )
}

export default AboutData

