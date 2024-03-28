"use client"
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import Custombutton from "./Custombutton"
const trainerdata=[
  {
    image:'/trainers/david.jpg',
    name:'David Williams',
    role:'Body Builder Coach',
    discription:'  Lorem ipsum dolor sit amet consectetur adipisicing elit',
    social:[
      {
        icon:FaFacebook, href:'http://facebook.com'},
        {icon:FaYoutube, href:'http://Youtube.com'},
        {icon:FaTwitter, href:'http://twitter.com'},
      
    ]
  },
  {
    image:'/trainers/matt.jpg',
    name:'Rosy Henry',
    role:'Body Builder Coach',
    discription:'  Lorem ipsum dolor sit amet consectetur adipisicing elit',
    social:[
      {
        icon:FaFacebook, href:'http://facebook.com'},
        {icon:FaYoutube, href:'http://Youtube.com'},
        {icon:FaTwitter, href:'http://twitter.com'},
      
    ]
  },

  {
    image:'/trainers/david.jpg',
    name:'Matt Stone',
    role:'Body Builder Coach',
    discription:'  Lorem ipsum dolor sit amet consectetur adipisicing elit',
    social:[
      {
        icon:FaFacebook, href:'http://facebook.com'},
        {icon:FaYoutube, href:'http://Youtube.com'},
        {icon:FaTwitter, href:'http://twitter.com'},
      
    ]
  },
  {
    image:'/trainers/matt.jpg',
    name:'Sofia Louren',
    role:'Body Builder Coach',
    discription:'  Lorem ipsum dolor sit amet consectetur adipisicing elit',
    social:[
      {
        icon:FaFacebook, href:'http://facebook.com'},
        {icon:FaYoutube, href:'http://Youtube.com'},
       { icon:FaTwitter, href:'http://twitter.com'},
      
    ]
  }

]
function Team() {
  return (
   <section className='' id='team'>
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-6 mt-4 p-6">Our Trainers</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12 md:gap-4">
          {trainerdata.map((trainer,index)=>
          {
            return (
              <div key={index} className="flex flex-col  items-center justify-center">
                  <div className="relative w-[300px] h-[340px] mx-auto mb-4">
                    <Image src={trainer.image} fill alt="Trainer"></Image>
                  </div>
                  <h4 className="h4 mb-2">{trainer.name}</h4>
                  <p className="uppercase text-xs mb-2">{trainer.role}</p>
                  <p className="mb-6 max-w-[320px] mx-auto text-center">{trainer.discription}</p>
                  <div className="flex justify-center gap-12">
                      {trainer.social.map((social, index)=>
                      {
                        return(
                          <div key={index}>
                            <Link href={social.href} className="hover:text-red-500 transition-all">
                              <social.icon className="text-lg"/>
                            </Link>
                          </div>
                        )
                      })}
                  </div>
              </div>
            )
          })}

        </div>          
      </div>
   </section>
    
  )
}

export default Team
