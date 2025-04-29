import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className="bg-dropdown text-textColorTwo py-5 font-BeVietnam text-[17px] xs:py-10">
        <div className="flex lg:w-[80%] xs:w-[90%] xs:flex-col-reverse lg:flex-row mx-auto justify-between">
            <div className="lg:w-[20%]">
                <img src="/images/demo-business-logo-white.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae.</p>
                <p>&copy 2024 <span className="underline text-white">Crafto</span></p>
            </div>
            <div className="flex justify-between lg:w-[80%] flex-wrap xs:my-3 lg:my-0">
            <div className="xs:w-[50%] lg:w-[25%]">
                <p className="font-Sora text-white">Company</p>
                <p>About us</p>
                <p>Our services</p>
                <p>Our clients</p>
                <p>Contact</p>
            </div>
            <div className="xs:w-[50%] lg:w-[25%]">
                <p className="font-Sora text-white">Services</p>
                <p>Branding</p>
                <p>eCommerce</p>
                <p>Content</p>
                <p>Marketing</p>
            </div>
            <div className="xs:w-[50%] lg:w-[25%]">
                <p className="font-Sora text-white">Social connect</p>
                <p>Facebook</p>
                <p>Dribble</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="xs:w-[50%] lg:w-[25%]">
                <p className="font-Sora text-white">Get in touch</p>
                <p>401 Broadway, 24th Floor</p>
                <p>New York, NY 10013</p>
                <p className="flex text-white space-x-2"><FiPhoneCall />+1 234 567 8910</p>
                <p className="flex text-white space-x-2"><CiMail /> <span className="underline">info@domain.com</span></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer