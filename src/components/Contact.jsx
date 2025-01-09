// Next
import Image from "next/image"
// Components
import { FrontEndForm } from "./index"
// Media
import Nutrion from "media/home/nutrion-right.png"
const Contact = () => {
  return (
    <section>
      <div className="relative z-20 -mt-[180px] bg-[#f7f7f7] md:pt-[300px] pt-[250px] pb-[40px]">
        <Image
          src={Nutrion}
          alt="nutrion"
          draggable="false"
          width={200}
          height={300}
          className="absolute -z-10 -bottom-28 right-0 w-max h-max object-cover object-right-0 xl:block hidden"
        />
        <div className="container">
          <div className="grid grid-cols-12 gap-x-5 gap-y-10">
            <div className="lg:col-span-7 col-span-12 max-w-[600px]">
              <h2 className="text-black xl:text-[65px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] leading-tight font-extrabold max-w-[500px] mb-3">
                Get in touch with{" "}
                <span className="inline-block text-white bg-[url('../../public/clipPath/2.png')] bg-center bg-cover bg-no-repeat py-2 px-3">
                  us!
                </span>
              </h2>
              <p className="xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[16px] text-[14px] font-normal leading-normal text-black">
                Fill out the form below, and our team will reach out to you
                promptly.
              </p>
            </div>
            <div className="lg:col-span-5 col-span-12">
              <FrontEndForm label={false} css="lg:max-w-[500px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
