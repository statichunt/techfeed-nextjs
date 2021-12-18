import { IconData } from '../config/IconData'
import { footerData } from '../config/footerData'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'



function Footer() {
  
const router=useRouter()
    return (
        <div className="py-20 border-t-2 border-footerBorder">
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
                <div className="flex ">
                    {
                        IconData.map(data =>
                            <Link href={data.profileLink} key={data.class}>
                        <a className="" target="_blank" rel='noflow' >
                            
                             <div 
                            className="socialLink hover:bg-black hover:text-linkHoverColor">
                                {data.icon}
                                </div>
                                
                                </a>
                                </Link>)
                    }

                </div>
                <div className="text-center mt-8 font-lora text-lg sm:text-xl">
                    <p >{footerData.coppy}</p>
                    <p>{footerData.activity} 

                     <Link href={footerData.link}> 
                    <a className="text-commonColor" 
                    target="_blank" rel='noflow'>{footerData.name}</a>
                    </Link>
                    
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer

