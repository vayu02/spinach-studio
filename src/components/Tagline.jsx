import React from 'react'
import Banner from '../assets/banner.png'

const Tagline = () => {
    return (
        <div>
            <section className=" flex-col flex-center   text-white mt-[3.438rem] ">
                <div className="container  sm:text-center">
                    <h1 className="text-[2.25rem] leading-[2.875rem]">
                        Design Systems for scale
                    </h1>

                    <div className="flex-center">
                        <p className="leading-[1.875rem] mt-[1rem] md:mt-[1.5rem] lg:mt-[2rem] xl:mt-[2.5rem] xl:w-[52.75rem] lg:w-[52.75rem] ">
                            Add consistency to the scaling up of User Experience
                            with an organized assembly of guidelines, components
                            and documentation.
                        </p>
                    </div>
                </div>
            </section>
            <div className="mt-[3.5rem] flex-center">
                <img
                    src={Banner}
                    alt="banner"
                    className="sm:w-full xl:h-[37.5rem] md:h-[26.25rem] xs:w-[24.75rem] xs:h-[30.5rem] bg-cover "
                />
            </div>
        </div>
    )
}

export default Tagline
