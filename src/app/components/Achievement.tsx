"use client"
import CountUp from 'react-countup';
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import {ImUsers} from 'react-icons/im'
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';
const stats=[
    {
        number:19,
        icon:FaBriefcase,
        text:'training course'
    }  ,
    {
        number:879,
        icon:FaClock,
        text:'Working Hours'
    }  ,
    {
        number:150,
        icon:ImUsers,
        text:'Happy Customer'
    }  ,
    {
        number:9,
        icon:FaTrophy,
        text:'International awards'
    }  ,    
]
const containerVariant={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.4,
            duration:0.5,
            ease:'linear',
        },
    },
};

const stateItems={
    hidden:{y:20, opacity:0},
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            ease:[0.25,0.6,0.3]
        },
    },
};
function Achievement() {
const ref= useRef(null);
  return (
    <div className='container mx-auto'>
            <motion.div
            variants={containerVariant} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='grid grid-cols-1 md:grid-cols-4 gap-16'>
                {stats.map((items, index)=>
            {
                return< div 
                key={index} className='flex flex-col justify-center items-center '>
                        <div className='border border-red-500 w-[140px] h-[140px] mx-auto
                        rounded-full p-1 mb-6'>
                            <div
                            ref={ref}
                            className='border w-full h-full flex
                            items-center justify-center text-5xl rounded-full'>
                                <CountUp start={0} end={items.number} duration={6}/>

                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <items.icon className='text-3xl mb-2'/>
                            <h2 className='h4'>{items.text}</h2>
                        </div>
                    </div>
            })}
            </motion.div>

    </div>
  )
}

export default Achievement
