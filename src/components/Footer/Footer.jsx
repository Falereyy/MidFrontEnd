import React from "react";

const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className="bg-[#12141e] pt-12">
        {/* ======== footer top ========*/}
        <div className="container">
            <div className="flex items-center justify-between md:gap-8">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                        Do you want to make beautiful products?
                    </h2>
                    <a href="#contact">
                        <button className="bg-primaryColor text-white font=[500] flex item-center gap-2 hover:bg-smallTextColor 
                                ease-in duration-300 py-2 px-4 rounded-[8px] ">
                            <i class="ri-mail-line"></i> Hire Me
                        </button>
                    </a>
                </div>

                <div className="w-full sm:w-1/2 ">
                    <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                    "Software development is a challenging but rewarding career. It requires creativity, problem-solving skills, and a passion for technology."
                    </p>
                
                <div className="flex item-center gap-4 flex-wrap md:gap-8 mt-10 ">
                    <span className="text-gray-300 font-[600] text-[15px]">
                        Follow Me:
                    </span>

                    <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                        <a href="https://instagram.com/fallkomaling?igshid=MTk0NTkyODZkYg==" className="text-gray-300 font-[500] text-[18px]">
                            <i class="ri-instagram-line"></i>
                        </a>
                    </span>
                    <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                        <a href="https://www.facebook.com/Falerey.M.Komaling?mibextid=ZbWKwL" className="text-gray-300 font-[500] text-[18px]">
                            <i class="ri-facebook-fill"></i>
                        </a>
                    </span>
                    <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                        <a href="https://youtube.com/@falereykomaling1545?si=Dl6_fv6Hh0wo3CHN" className="text-gray-300 font-[500] text-[18px]">
                            <i class="ri-youtube-line"></i>
                        </a>
                    </span>
                    <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                        <a href="https://github.com/Falereyy" className="text-gray-300 font-[500] text-[18px]">
                            <i class="ri-github-line"></i>
                        </a>
                    </span>
                </div>
                </div>
            </div>

            <div>
                <ul className="flex items-center justify-center gap-10 mt-10">
                    <li><a className="text-gray-400" href="#about">About</a></li>
                    <li><a className="text-gray-400" href="#services">Services</a></li>
                    <li><a className="text-gray-400" href="#portfolio">Portfolio</a></li>
                    <li><a className="text-gray-400" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        {/* ======== footer top end ========*/}
        {/* ======== footer bottom ========*/}
        <div className="bg-[#1b1e29] py-5 mt-14">
            <div className="container">
                <div className="flex items-center justify-ceenter sm:justify-between">
                    <div className="hidden sm:block">
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex 
                            items-center justify-center ">
                                F
                            </span>
                            <div className="leading-[20px]">
                                <h2 className="text-gray-200 font-[500] text-[18px]">
                                    Falerey
                                </h2>
                                <p className="text-gray-400 text-[14px] font-[500]">
                                    Personal
                                </p>
                            </div>
                        </div>
                    </div>
                <div>
                        <p className="text-gray-400 text-[14px]">Copyright {year} developed by Falerey - All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* ======== footer bottom end ========*/}
    </footer>
};

export default Footer;