import Image from 'next/image'

import {marked} from "marked";

function AboutData({data}) {
    
    return (
        <div className="w-1/2  mx-auto my-32">
            <div className="w-full h-h300  relative mx-auto">
                <Image
                alt=""
                src={data.frontmatter.aboutImage}
                layout='fill'
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

