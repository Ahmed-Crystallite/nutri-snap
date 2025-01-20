"use client"
import { useEffect, useState } from "react"
import { BestWay, Contact } from "@/components"
import termsData from "./data.json"
import Image from "next/image"
const Terms_Of_Services = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(termsData)
  }, [])
  return (
    <>
      <section>
        <div className="lg:py-[100px] md:py-[80px] py-[60px] bg-primary">
          <div className="container">
            <h1 className="lg:text-[50px] md:text-[40px] text-[30px] leading-tight font-extrabold text-white text-center">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[60px]">
          <div className="container">
            <div className="py-[30px]"></div>

            <h2 className="text-[30px] mb-5">Introduction</h2>
            <p>We respect your privacy and are committed to protecting it through our
              compliance with this privacy policy ('Policy'). This Policy describes the types
              of information we may collect from you or that you may provide ('Personal
              Information') in the 'NutriSnap' mobile application ('Mobile Application' or
              'Service') and any of its related products and services (collectively,
              'Services'), and our practices for collecting, using, maintaining, protecting,
              and disclosing that Personal Information.</p>
            <div className="py-[20px]"></div>

            <h2 className="text-[30px] mb-5">Collection of Personal Information</h2>
            <p>You can access and use the Mobile Application and Services without telling
              us who you are or revealing any information by which someone could
              identify you as a specific, identifiable individual. If, however, you wish to use
              some of the features offered in the Mobile Application, you may be asked to
              provide certain Personal Information (for example, your name and email
              address).</p>

            <div className="py-[20px]"></div>
            <h2 className="text-[30px] mb-5">Use and Processing of Collected Information</h2>
            <p>We act as a data controller and a data processor when handling Personal
              Information, unless we have entered into a data processing agreement with
              you, in which case you would be the data controller and we would be the
              data processor.</p>

            <div className="py-[20px]"></div>
            <h2 className="text-[30px] mb-5">Payment Processing</h2>
          <p>In case of Services requiring payment, you may need to provide your credit
            card details or other payment account information, which will be used solely
            for processing payments. We use third-party payment processors to assist us
            in processing your payment information securely.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Managing Information</h2>
          <p>You are able to delete certain Personal Information we have about you. The
            Personal Information you can delete may change as the Mobile Application
            and Services change.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Disclosure of Information</h2>
          <p>Depending on the requested Services or as necessary to complete any
            transaction or provide any Service you have requested, we may share your
            non-personally identifiable information with our contracted companies and
            service providers.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Retention of Information</h2>
          <p>We will retain and use your Personal Information for the period necessary as
            long as your user account remains active, to enforce our Policy, resolve
            disputes, and unless a longer retention period is required or permitted by
            law.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Region-Specific Notices</h2>
          <p>Out of respect for your privacy, we have implemented additional measures
            to comply with the obligations and rights associated with the collection of
            Personal Information as dictated by the laws governing the regions of our
            users.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Privacy of Children</h2>
          <p>We do not knowingly collect any Personal Information from children under
            the age of 13. If you are under the age of 13, please do not submit any
            Personal Information through the Mobile Application and Services.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Do Not Sell My Personal Information</h2>
          <p>You have the right to choose not to have your Personal Information sold or
            disclosed by contacting us. Upon receiving and verifying your request, we
            will cease the sale and disclosure of your Personal Information.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Changes and Amendments</h2>
          <p>We reserve the right to modify this Policy or its terms related to the Mobile
            Application and Services at any time at our discretion. When we do, we will
            revise the updated date at the bottom of this page.</p>

          <div className="py-[20px]"></div>
          <h2 className="text-[30px] mb-5">Contacting Us</h2>
          <p>If you have any questions, concerns, or complaints regarding this Policy, we
            encourage you to contact us using the details provided in the application or
            via the support email.</p>

          </div>
        </div>
      </section>
      
    
    </>
  )
}

export default Terms_Of_Services
