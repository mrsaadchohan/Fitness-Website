import React from 'react'
import Image from 'next/image';


const classes=[
  {
    name:'body building',
    img:'/classes/bodybuilding.jpg',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing'
  },
  {
    name:'cardio',
    img:'/classes/cardios.jpg',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing'
  },
  {
    name:'fitness',
    img:'/classes/fitne.jpg',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing'
  },
  {
    name:'crossfit',
    img:'/classes/crossfit.jpg',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing'
  }
]

function Classes() {
  return (
    <section className='' id='class'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {classes.map((item, index)=>
        {
          return <div className='relative w-full h-[300px] lg:h-[485px]  flex flex-col justify-center items-center' key={index}>
              <div className='bg-black/50 absolute w-full h-full z-10 top-0'></div>
              <Image src={item.img} fill className='object-cover ' alt=''>

              </Image>
          </div>
        })}
      </div>      
    </section>
  )
}

export default Classes
