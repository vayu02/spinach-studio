import Logo from '../assets/LOGO.png'
import LOGO_FULL from '../assets/LOGO_FULL.png'
import Hamburger from '../assets/Hamburger.png'
import Dropdown from '../assets/Dropdown.png'

const Header = () => {
    return (
        <header className="h-[4.75rem] flex-center ">
            <div className="container flex justify-between items-center">
                <div className="xs:w-full xs:flex-row sm:flex-row-reverse sm:w-max sm:p-0 xs:gap-x-0 sm:gap-x-[1rem] lg:mr-[1.125rem] xl:gap-x-[1.5rem]  flex justify-between  ">
                    <img src={Logo} className="lg:hidden " />
                    <img src={LOGO_FULL} className="xs:hidden lg:flex" />
                    <div className="flex justify-center items-center">
                        <img
                            src={Hamburger}
                            // className=" xl:w-[3rem] xl:h-[3rem] lg:w-[2.5rem] lg:h-[2.5rem]"
                        />
                    </div>
                </div>

                <div className="hidden  h-[3.5rem] text-white lg:flex-center  bg-[#1A1A1E] rounded-100">
                    <div className="btn-nav ">The Company</div>
                    <div className="btn-nav lg:gap-x-[0.5rem] bg-black rounded-100 ">
                        Our Services
                        <img src={Dropdown} />
                    </div>
                    <div className="btn-nav ">Our Expertise</div>
                    <div className="btn-nav ">Client Work</div>
                </div>

                <div className="hidden sm:flex">
                    <button className=" border text-white py-[0.625rem] px-[2rem] rounded-100 text-[1rem] ">
                        Engage Us
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
