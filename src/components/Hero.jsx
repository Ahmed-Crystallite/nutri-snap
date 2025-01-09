// Next
import Image from "next/image"
// Components
import { CTA } from "./index"
// Media
import HeroImage from "media/home/hero.png"
import Vegitable from "media/home/vegitables.png"

const Hero = () => {
  return (
    <section>
      <div className="relative lg:pt-0 lg:pb-[30px] md:py-[60px] py-[50px] z-20 bg-primary">
        <Image
          src={Vegitable}
          alt="vegitalbes"
          className="absolute object-cover object-bottom  bottom-0 w-full h-max"
        />
        <div className="container">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-10 items-center">
              <div className="lg:col-span-6 text-white">
                <span className="font-mono 2xl:text-[20px] md:text-[18px] text-[16px] leading-tight font-extrabold">
                  AMAZING FEATURES
                </span>
                <h1 className="font-sans xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] my-2 leading-tight font-extrabold max-w-[600px]">
                  Fuel Your Life with Good Nutrition
                </h1>
                <p className="font-mono text-white/80 2xl:text-[20px] md:text-[18px] text-[16px] leading-normal font-medium 2xl:max-w-[700px] max-w-[650px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-10 flex md:gap-x-4 gap-x-3">
                  <CTA />
                  <CTA
                    icon="apple"
                    text="Available on the"
                    text2="App Store"
                    csstext1="capitalize"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 relative">
                <Image
                  src={HeroImage}
                  priority
                  alt="hero2"
                  width={343}
                  height={758}
                  className="lg:-mb-32 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
