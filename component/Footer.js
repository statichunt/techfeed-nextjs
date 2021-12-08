import { IconData } from '../config/IconData'
import { footerData } from '../config/footerData'
function Footer() {

    return (
        <div className="py-20 border-t-2 border-footerBorder">
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
                <div className="flex ">
                    {
                        IconData.map(data =><a  href="#" className="" key={data.class}> <div 
                            className="socialLink hover:bg-black hover:text-linkHoverColor">
                                {data.icon}</div></a>)
                    }

                </div>
                <div className="text-center mt-8 font-lora text-lg sm:text-xl">
                    <p >{footerData.coppy}</p>
                    <p>{footerData.activity} <span className="text-commonColor">{footerData.name}</span></p>
                </div>
            </div>

        </div>
    )
}

export default Footer
