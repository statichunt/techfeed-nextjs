import { IconData } from '../config/IconData'
import footerData  from '../content/config.json'
import Link from 'next/link'



function Footer() {
  const {footer}=footerData
    return (
        <div className="py-20 border-t-2 border-footerBorder">
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
                <div className="flex ">
                    {
                        IconData.map(data =>
                            <Link href={data.profileLink} key={data.class}>
                        <a className="" target="_blank" rel='noflow' >
                            
                             <div 
                            className="sm:w-14
                            transition
                            sm:h-14
                            w-12
                            h-12
                            rounded-full
                            text-xl
                            sm:text-sm
                            mx-2
                            bg-secoundary-color
                            flex
                            justify-center
                            items-center hover:bg-black hover:text-text-secoundary">
                                {data.icon}
                                </div>
                                
                                </a>
                                </Link>)
                    }

                </div>
                <div className="text-center mt-8 font-lora text-lg sm:text-xl">
                    <p >{footer.coppy}</p>
                    <p>{footer.activity} 

                     <Link href={footer.link}> 
                    <a className="text-primary-color" 
                    target="_blank" rel='noflow'>{footer.name}</a>
                    </Link>
                    
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer

