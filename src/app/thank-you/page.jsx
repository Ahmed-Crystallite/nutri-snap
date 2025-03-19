// Next
import Image from "next/image"
// Components
// Media
import HeroImage from "media/home/hero.png"
import Vegitable from "media/home/vegitables.png"

const ThankYou = () => {
  return (
    <main>
      <section>
        <div className="relative lg:pt-0 lg:pb-[30px] lg:mb-16 md:py-[60px] py-[80px] z-20 bg-primary">
          <Image
            src={Vegitable}
            alt="vegitalbes"
            className="absolute object-cover object-bottom  bottom-0 w-full h-max"
          />
          <div className="container">
            <div className="relative z-10">
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-10 items-center">
                <div className="lg:col-span-6 text-white">
                  <h1 className="font-sans xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] my-2 leading-tight font-extrabold max-w-[600px]">
                    Thank You for Contacting Us
                  </h1>
                  <p className="font-mono text-white/80 2xl:text-[20px] md:text-[18px] text-[16px] leading-normal font-medium">
                    We will get back to you as soon as possible.
                  </p>
                  <div className="mt-10">
                    <a
                      href="/"
                      className="font-mono tracking-wider bg-white text-primary font-semibold px-14 py-3 rounded-[5px] hover:bg-white/80 transition-all duration-300"
                    >
                      Go to Home
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-6 relative">
                  <Image
                    src={HeroImage}
                    priority
                    alt="hero2"
                    width={343}
                    height={758}
                    className="lg:block hidden lg:-mb-32 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ThankYou
