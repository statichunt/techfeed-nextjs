import { IconData } from './IconData'
function Footer() {

    return (
        <div className="py-20 border-t-2 border-footerBorder">
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
                <div className="flex ">
                    {
                        IconData.map(data => <div key={data.class}
                            className="socialLink hover:bg-black hover:text-linkHoverColor">
                                <a  href="#" className="" >{data.icon}</a></div>)
                    }

                </div>
                <div className="text-center mt-8 font-lora text-lg sm:text-xl">
                    <p >© 2020, All rights reserved.</p>
                    <p>Design & Develop by <span className="text-commonColor">GetHugoThemes</span></p>
                </div>
            </div>

        </div>
    )
}

export default Footer
