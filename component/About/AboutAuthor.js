import Link from 'next/dist/client/link'
import Image from 'next/image'

import { IconData } from '../../config/IconData'


function AboutAuthor({data,author}) {
   

   
   
    return (
        <div className="my-20 " >
              <p className="text-lg font-oswald my-5">PUBLISHED BY <strong className="text-primary-color">{author}</strong></p>
            <div className="flex flex-col text-center  sm:text-left lg:flex-row  ">
            <div className="w-32 h-h32  rounded-full relative mx-auto">
                    <Image className="rounded-full"
                    alt=""
                    src={data.aboutImage}
                    layout='fill'
                    objectFit="cover"
                    >

                    </Image>
                </div>
                
                <div className="sm:ml-10 w-full sm:w-4/5 lg:my-0 my-8 text-center lg:text-left"> 
                  
                    <p>{data.details}</p>
                    <div className="hover my-5 cursor-pointer">
                        <Link href='/about'><a className=" text-lg font-lora  capitalize"
                     
                     > know more..</a></Link>
                    </div>
                    <div className="flex  justify-center lg:justify-start">
                        {

                            IconData.map(icon=><div key={icon.class} className="mr-2">
                            <Link href={icon.profileLink} >  
                             <a className="hover text-black " target="_blank" rel='noflow'>{icon.icon}</a>
                             </Link>
                                </div>)

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor
