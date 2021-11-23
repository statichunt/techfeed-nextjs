import Image from 'next/image'

import { IconData } from './IconData'




const Banner=()=> {

  
    return (
        <>
        <div className="text-white h-bannerHeight relative">
  
        <div className="h-bannerHeight relative">
        <Image
          alt=""
          src='/image/banner.jpg'
          layout='fill'
          objectFit='cover'
          />
        </div>

      
      <div className="absolute top-0 h-bannerHeight bg-black opacity-50 w-full "></div>
          
      <div className="bannerContent">
      <div className="w-3/4 h-logoHeight relative ">
        <Image
          alt=""
          src='/logo.png'
         layout="fill"
        
          
          />
        </div>
        
          <p className="my-10 ">Beautiful, Elegant and Vintage-inspired premium blog and portfolio theme.</p>
        
        <div className="flex justify-center">

          {
            IconData.map(icon=><div className="socialLink bg-transparent border-bannerIconBorder border-solid border-2 " key={icon.class}><a href="#" >{icon.icon}</a></div>)
          }
          
          

        </div>
      </div>
        </div>

     

        
        </>
    )
 
  
}

export default Banner
