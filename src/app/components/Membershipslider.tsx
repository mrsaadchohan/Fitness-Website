"use client"
import Image from "next/image"
import { MdClose } from "react-icons/md"
import { FaCheck } from "react-icons/fa6"
import Custombutton from "./Custombutton"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'


// Data
const Membershipdata=[
  {
    title:'Standard',
    price:'30',
    benefits:[
      {
        icon:FaCheck,
        text:'Include Membership'
      },
      {
        icon:FaCheck,
        text:'Access to all gym Facilities'
      },
      {
        icon:MdClose,
        text:'Diet Plane included'
      },
      {
        icon:FaCheck,
        text:'Health and Fitness Tips'
      },
      {
        icon:MdClose,
        text:'Monday-Friday gym access'
      },
      {
        icon:FaCheck,
        text:'full access to everything'
      },
      {
        icon:MdClose,
        text:'No additional ammnities'
      },
      
    ]
  },

  {
    title:'Ultimate',
    price:'45',
    benefits:[
      {
        icon:FaCheck,
        text:'Include Membership'
      },
      {
        icon:FaCheck,
        text:'Access to all gym Facilities'
      },
      {
        icon:FaCheck,
        text:'Diet Plane included'
      },
      {
        icon:FaCheck,
        text:'Health and Fitness Tips'
      },
      {
        icon:FaCheck,
        text:'Monday-Friday gym access'
      },
      {
        icon:FaCheck,
        text:'full access to everything'
      },
      {
        icon:MdClose,
        text:'No additional ammnities'
      },
      
    ]
  },
  {
    title:'Professional',
    price:'60',
    benefits:[
      {
        icon:FaCheck,
        text:'Include Membership'
      },
      {
        icon:FaCheck,
        text:'Access to all gym Facilities'
      },
      {
        icon:FaCheck,
        text:'Diet Plane included'
      },
      {
        icon:FaCheck,
        text:'Health and Fitness Tips'
      },
      {
        icon:FaCheck,
        text:'Monday-Friday gym access'
      },
      {
        icon:FaCheck,
        text:'full access to everything'
      },
      {
        icon:FaCheck,
        text:'No additional ammnities'
      },
      
    ]
  }

]

function Membershipslider() {
  return (
      <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable:true,
      }}
      breakpoints={{
        768:{
          slidesPerView:2,
          spaceBetween:30
        },
        1024:{
          slidesPerView:3,
          spaceBetween:30
        }
      }}
      className='min-h-[680px]'
      >
        {Membershipdata.map((item, index)=>
        {
          return(
            <SwiperSlide key={index}>
                <div className="text-white border border-red-500 hover:bg-primary-300/80
                transition-all duration-300 w-full h-[37rem] max-w-sm xl:max-w-none mx-auto">
                  <div className="py-5 px-[60px] border-b border-red-500">
                  <h4 className="h4 text-center" >{item.title}</h4>
                  </div>
                  <div className="py-[30x] px-[60px]">
                    <ul className="flex flex-col gap-5 mb-7 mt-5">
                      {item.benefits.map((item, index)=>
                      {
                        return(
                          <li key={index} className="flex items-center gap-2 ">
                            <item.icon className="text-red-500 text-lg"/>
                            {item.text}
                            </li>
                        )
                      })}
                    </ul>
                      <p className="text-red-500 mb-8 flex gap-1 items-center">
                          <sup className="text-4xl">$</sup>
                          <strong className="text-6xl">{item.price}</strong>
                          <em className="self-end text-2xl">/month</em>

                      </p>
                      <Custombutton
                      containerStyles="w-[196px] h-[62px] "
                      text="Buy now"
                      
                      />
                  </div>
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
  )
}

export default Membershipslider
