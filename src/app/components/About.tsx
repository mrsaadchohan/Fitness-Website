"use client";
import { FaUser, FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import Achievement from "./Achievement";
const features = [
  {
    icon: <FaUser />,
    title: "award winning trainers",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing",
  },
  {
    icon: <FaDumbbell />,
    title: "Modern equimpent",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing",
  },
];

function About() {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-2 mb-8">
            <h2 className="h2 text-center">About Us</h2>
            <p className="mx-auto text-center  max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.ad maxime rem minus, 
              soluta nemo esse quaerat, omnis quia vero sapiente accusantium eum! Quas?
              accusantium eum! Quas?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full" >
          {features.map((feature, index)=>
          {
            return(
              <div className="flex flex-col justify-center items-center gap-4 border p-10" key={index}>
                <div className="text-4xl bg-primary-300 text-white w-[60px] h-[60px]
                rounded-full flex justify-center items-center">{feature.icon}</div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-red-500">{feature.title}</h4>
                  <p >{feature.subtitle}</p>
                </div>
              </div>
            )
          })}

          </div>

        </div>
    </section>
  );
}

export default About;
