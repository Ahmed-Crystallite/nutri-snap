// Next
import Image from "next/image"

// Media
import SideImage from "media/home/about/sideImage.png"
import Avocado from "media/home/avocado.png"

// Components
import { CTA } from "./index"

const About = () => {
  return (
    <section id="about-us">
      <div className="relative z-20 bg-[#EEF1F840] bg-opacity-40 md:py-[60px] py-[50px]">
        <Image
          src={Avocado}
          alt="avocado"
          width={256}
          height={321}
          className="absolute -z-10 -bottom-8 right-0 w-max h-max object-cover object-right xl:block hidden"
        />
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 flex flex-wrap flex-col-reverse items-center gap-10">
            <div className="">
              <Image src={SideImage} alt="screen" className="mx-auto" />
            </div>
            <div className="max-w-[600px]">
              <span className="block font-mono xl:text-base text-sm leading-normal font-bold text-[#191931] mb-3">
                Lorem ipsum dolor sit amet consectetur. Duis id viverra proin
                arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc
                habitasse proin.
              </span>
              <p className="xl:text-base text-sm text-[#73858F] tracking-wide font-normal leading-normal mb-3">
                Lorem ipsum dolor sit amet consectetur. Sit dolor fames neque
                pellentesque consequat volutpat nulla eu sed. Ac enim id quisque
                vulputate. Dictum est fermentum leo orci suspendisse. Sed
                pretium tristique odio mi augue mauris tellus. Metus ac
                tincidunt nec diam eleifend. Elit maecenas id egestas cras. Ut
                eu aliquet enim sodales odio. Donec eros pulvinar quis lacus.
              </p>
              <p className="xl:text-base text-sm text-[#73858F] tracking-wide font-normal leading-normal mb-3">
                Ac id risus dictum nam lacus proin et quis egestas. Arcu ac
                blandit suspendisse mauris ultrices amet massa. Nulla aliquam
                vulputate orci justo. Auctor tellus purus tincidunt tristique
                tempor. Non dictum in posuere pretium rhoncus vulputate.
                Adipiscing hendrerit quam facilisi diam elementum aliquam amet.
                Vulputate sit eget viverra tincidunt velit integer morbi proin
                id.
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
