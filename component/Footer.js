import socialIcon from '../content/config.json'
import footerData  from '../content/config.json'
import Link from 'next/link'



function Footer() {
    const {socialMedia}=socialIcon
  const {footer}=footerData
    return (
        <div className="py-20 border-t-2 border-footerBorder">
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
                <div className="flex ">
                    {
                      socialMedia.map(data =>
                            <Link href={data.profileLink} key={data.class}>
                        <a className="" target="_blank" rel='noflow' >
                            
                             <div 
                            className="socialMedia hover:bg-black hover:text-text-secoundary">
                                <i className={`${data.icon} not-italic`}></i>
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

