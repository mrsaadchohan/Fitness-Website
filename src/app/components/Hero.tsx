
import HeroSlider from './HeroSlider'

function Hero() {
  return (
    <section className='h-[80vh] lg:h-[925px] bg-hero bg-cover bg-center bg-no-repeat' id='home'>
        <div className="container mx-auto h-full">
          <HeroSlider/>
        </div>
    </section>
  )
}

export default Hero
