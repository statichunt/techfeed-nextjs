import Link from 'next/dist/client/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { IconData } from '../../config/IconData'


function AboutAuthor({data}) {
   

    const router = useRouter()
   
    return (
        <div className="my-20 " >
              <p className="text-lg font-display my-5">PUBLISHED BY <strong className="text-commonColor">{data.name}</strong></p>
            <div className="flex flex-col text-center sm:text-left sm:flex-row ">
            <div className="w-32 h-h32  rounded-full relative mx-auto">
                    <Image className="rounded-full"
                    alt=""
                    src={data.aboutImage}
                    layout='fill'
                    objectFit="cover"
                    >

                    </Image>
                </div>
                
                <div className="ml-10  w-4/5">
                  
                    <p>{data.details}</p>
                    <div className="hover my-5 cursor-pointer">
                        <Link href='/about'><a className=" text-lg font-lora  capitalize"
                     
                     > know more..</a></Link>
                    </div>
                    <div className="flex  ">
                        {

                            IconData.map(icon=><div key={icon.class} className="mr-2"><a className="hover text-black ">{icon.icon}</a></div>)

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor
