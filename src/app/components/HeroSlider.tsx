"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Custombutton from "./Custombutton";
// import 'animate.css';
// px-10 py-28 max-sm:mt-6 max-md:mt-10
function HeroSlider() {
  
  return (
    <section className="relative">
      <Swiper className="">
        <SwiperSlide className="container mx-auto">
          <div className="h-full flex justify-end pt-32  lg:pt-28 lg:px-10 lg:py-28">
            <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-[700px]">
              <h1 className="h1 text-center lg:text-left mb-2 max-sm:leading-none max-sm:tracking-normal">
                <span>Where hard</span> work meets success
              </h1>
              <p className="text-white italic text-center lg:text-left mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                animi dolores nostrum
              </p>
              <Custombutton
                text="Get Started"
                containerStyles="w-[196px] h-[62px] bg-red-300"
              />
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>

      {/* Swiper navigation */}
      {/* <div className="">
      <SwiperNav
          containerStyles=" absolute bottom-2 lg:bottom-0 -mb-14 right-0 px-10 h-auto w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1 flex justify-center items-center gap-1"
          btnstyles="border border-red-500 text-white w-10 h-10 flex justify-center items-center bg-red-500 hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          iconstyles="text-xl"
        />
      </div> */}
    </section>
  );
}

export default HeroSlider;
