"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import Custombutton from "./Custombutton";

export default function Footer() {
  return (
    <section className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          <div className="flex flex-col gap-4">
            <Link href="">
              <Image src="/logo.png" width={117} height={55} alt="Logo" />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl  text-red-500" />
                <span>Lincoln Park Chicago, Illinos</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl  text-red-500" />
                <span>(518) 718-676 (465) 659-987</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl  text-red-500" />
                <span>sayhellow@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="h4 mb-4 text-red-500">Recent Blog posts</h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="" className="hover:text-red-500 transition-all ">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercise
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="" className="hover:text-red-500 transition-all ">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercise
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="" className="hover:text-red-500 transition-all ">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercise
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="h4 text-red-500">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="">
                <Image
                  src="/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="Trainer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/trainers/matt.jpg"
                  width={100}
                  height={100}
                  alt="Trainer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="Trainer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/trainers/matt.jpg"
                  width={100}
                  height={100}
                  alt="Trainer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="Trainer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/trainers/matt.jpg"
                  width={100}
                  height={100}
                  alt="Trainer"
                />
              </Link>
            </div>
          </div>
          <div className="lg:-ml-8">
            <h4 className="h4 text-red-500">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. labore
                excepturi temporibus.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your Email address"
                  className="h-[50px] outline-none  px-2 text-primary-300"
                />
                <Custombutton containerStyles="h-[50px] px-8 " text="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
