import React, { useEffect } from 'react'
import "./Home.css"

export default function Home() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor")
        let timeout;
        document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";
            function mouseStopped() {
                cursor.style.display = "none";
            }
            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 1000);
        });

        //cursor effects when mouseout
        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });

    }, [])
    return (
        <>
            <div className='body'>
                <div className='cursor'></div>
                <div
                    className="navbar pl-[27px] pr-[27px] pt-[30px] flex flex-row justify-between"
                    style={{ zIndex: 999 }}
                >
                    <img src="/img/logo.png" alt="img_logo" />
                    <a
                        href='
                        https://www.linkedin.com/company/sanitra-sakha-sagara'
                        target='_blank'
                    >

                        <i className="fa-brands fa-linkedin-in" />
                    </a>
                </div>
                <div className="mt-[47px] text-center flex flex-col z-1">
                    <span className="text-[88px] font-[700] text">
                        We're Building Tomorrow's
                        <br />
                        Environment, Today
                    </span>
                    <span className="text-[20px] w-[653px] ml-auto mr-auto">
                        While our website undergoes maintenance to better serve you, our
                        commitment to empowering businesses in achieving their sustainability
                        goals remains unwavering.
                    </span>
                    <div className="mt-[48px] w-[187px] h-[48px] ml-auto mr-auto btn-bg rounded-[14px]">
                        <div
                            className="flex
        flex-row
        pt-[12px]
        justify-center
        items-center"
                        >
                            <a href='mailto:info.ss@sanitra.co.id' target='_blank'>
                                <span
                                    className="text-white
            text-center
            cursor-pointer"
                                >
                                    Contact Us
                                </span>
                                <i
                                    className="ml-1 fa-solid fa-caret-right text-[15px]
            text-white"
                                />
                            </a>

                        </div>
                    </div>
                </div>
                <div
                    className="absolute
z-[-1]
imgs"
                >
                    <img
                        src="/img/img_1.png"
                        alt="img_astro"
                        className="fixed
    bottom-0
    w-[100%]
    "
                    />
                    <img
                        src="/img/img_2.png"
                        alt="img_astro"
                        className="fixed
        w-[100%]
        
    bottom-0"


                    />
                    <img
                        src="/img/img_3.png"
                        alt="img_astro"
                        className="fixed
    bottom-0
    left-0
    right-0
    mx-auto"
                    />
                    <img
                        src="/img/img_4.png"
                        alt="img_astro"
                        className="fixed
    bottom-0
    left-[-120px]
    z-[-1]
    right-0
    mx-auto"
                    />
                </div>
            </div>

        </>
    )
}
