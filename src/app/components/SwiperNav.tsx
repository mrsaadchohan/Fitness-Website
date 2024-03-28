"use client"
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

function SwiperNav({ containerStyles, btnstyles, iconstyles }: { containerStyles: string, btnstyles: string, iconstyles: string }) {
  // const swipers = useSwiper();

  // const handleSlidePrev = () => {
  //   if (swiper) {
  //     swiper.slidePrev();
  //   }
  // };

  // const handleSlideNext = () => {
  //   if (swiper) {
  //     swiper.slideNext();
  //   }
  // };

  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnstyles}`} >
        <PiCaretLeftBold className={`${iconstyles}`} />
      </button>

      <button className={`${btnstyles}`} >
        <PiCaretRightBold className={`${iconstyles}`} />
      </button>
    </div>
  );
}

export default SwiperNav;
