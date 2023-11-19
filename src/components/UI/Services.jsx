import React from "react";
import frontendimg from '../../assets/image/front-end.png'
import backendimg from '../../assets/image/backend.png'
import appsimg from '../../assets/image/apps.png'
import designimg from '../../assets/image/design.png'

const Services = () => {
    return(
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        What do I help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                    I have experience in the fields of Frontend development, Backend development, UI/UX design, and APPS development.</p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm;max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">

                        {/* ========= vertical line running through the middle ========= */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

                        {/* ========= left card ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">Frontend Development </h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">I have experience in using HTML, CSS and JavaScript programming languages. I also have experience in using React, Angular, and Vue.js frameworks.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontendimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        {/* ========= right card ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1400' 
                                        data-aos-delay='50'
                                        className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">Backend Development </h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">I have experience in using the PHP, Python and Java programming languages. I also have experience in using Laravel, Django, and Spring Boot frameworks.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backendimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        {/* ========= left card ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">UI/UX Design</h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">I have experience in using a variety of tools and techniques, such as wireframes, mockups, and prototyping. I also have experience in using various design principles and techniques, such as usability, accessibility, and user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={designimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        {/* ========= left right ========= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12"></div>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1400'
                                        data-aos-delay='50' 
                                        className="bg-white p-4 rounded shadow group
                                        hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-2xl ">Apps Development </h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                            group-hover:font-[500]">I have experience in building various kinds of applications, such as websites, mobile applications, and information systems. I have experience in working with a wide variety of hardware and software.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={appsimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services