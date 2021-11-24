import Link from 'next/dist/client/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { IconData } from '../IconData'


function AboutAuthor({data}) {
   

    const router = useRouter()
   
    return (
        <div className="" >
              <p className="">PUBLISHED BY JOHN WOOD</p>
            <div className="">
            <div className="">
                    <Image className=""
                    alt=""
                    src={data.aboutImage}
                    layout='fill'
                    >

                    </Image>
                </div>
                
                <div className="">
                  
                    <p>{data.details}</p>
                    <div className="">
                        <Link href='/about'><a className=""
                     
                     > know more..</a></Link>
                    </div>
                    <div className="">
                        {

                            IconData.map(icon=><div key={icon.class}><a className="">{icon.icon}</a></div>)

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor
