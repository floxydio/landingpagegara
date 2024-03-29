import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const imgs = document.querySelector(".img_left_1");
    const imgsTwo = document.querySelector(".img_left_2");
    const imgsThree = document.querySelector(".img_left_3");
    let timeout;
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      cursor.style.display = "block";
      imgs.style.transform = `translate(${x / 200}px,${y / 200}px)`;
      imgsTwo.style.transform = `translate(${x / 200}px,${y / 200}px)`;
      // imgsThree.style.transform = `translate(${x / 200}px,${y / 200}px)`;
      // set width keep 100%
      imgs.style.width = "100%";

      imgsTwo.style.width = "100%";
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cursor.style.display = "none";
      }, 500);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  }, []);
  return (
    <>
      <div className="body w-full">
        <div className="cursor"></div>
        <div
          className="navbar pl-[27px] pr-[27px] pt-[30px] flex flex-row justify-between w-full max-[430px]"
          style={{ zIndex: 999 }}
        >
          <img
            src="/img/logo.png"
            alt="img_logo"
            className="
                    max-[430px]:w-[200px] w-[200px] object-contain
                    "
          />
          <a
            href="
                        https://www.linkedin.com/company/sanitra-sakha-sagara"
            target="_blank"
            className=""
          >
            <i className="fa-brands fa-linkedin-in sm:hidden md:hidden lg:block max-[430px]:hidden" />
          </a>
        </div>
        <div className="mt-[47px] text-center flex flex-col z-1">
          <span className="text-[88px] font-[700] bruta-pro text max-[430px]:ml-auto lg:ml-0">
            We're Building Tomorrow's
            <br />
            Environment, Today
          </span>
          <span className="text-[20px] w-[653px] ml-auto mr-auto gotham-light">
            While our website{" "}
            <span className="gotham-bold">undergoes maintenance</span> to better
            serve you, our commitment to empowering businesses in achieving
            their sustainability goals remains unwavering.
          </span>
          <div
            className="mt-[48px] w-[187px] h-[48px] btn-bg rounded-[14px] cursor-pointer
                    lg:ml-auto lg:mr-auto max-[430px]:ml-[220px] 
                    "
            onClick={() => {
              window.open("mailto:info.ss@sanitra.co.id", "_blank");
            }}
          >
            <div
              className="flex
        flex-row
        pt-[12px]
        justify-center
        items-center"
            >
              <span
                className="text-white
            text-center
            cursor-pointer"
              >
                Contact Us
              </span>
              <img
                src="/img/send_icon.png"
                alt="img_arrow"
                className="ml-[10px]"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute
                    max-[430px]:bg-no-repeat
z-[-1]
imgs"
        >
          <img
            src="/img/img_1.png"
            alt="img_astro"
            className="fixed
    img_left_1
    bottom-0
    left-[-5px]
    max-[430px]:left-[0px]
    "
          />
          <img
            src="/img/img_2.png"
            alt="img_astro"
            className="fixed
        w-[100%]
        img_left_2
        
    bottom-0"
          />
          <img
            src="/img/img_3.png"
            alt="img_astro"
            className="fixed
    bottom-0
    left-0
    right-0
    img_left_3
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
  );
}
