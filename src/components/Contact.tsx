import { RiArrowDropDownLine } from "react-icons/ri";

function Contact() {
  return (
    <div>
      <div>
        {/* section 1 start*/}
        <div className="bg-[#1a2c58] h-[480px] flex justify-center items-center flex-col">
          <h1 className="w-[90%] text-center xs:text-[40px] lg:text-[76px] text-white my-[20px] font-BeVietnam">
            Contact-business
          </h1>
          <RiArrowDropDownLine className="text-white xs:text-[40px] lg:text-[75px]" />
        </div>
        {/* section 1 end */}
            
        {/* section 2 start */}
        <div>
            <div>
                <h1 className="underline">Keep in touch?</h1>
                <p>401 Broadway, 24th Floor,</p>
                <p>Orchard View, London</p>
                <h1 className="underline">Toll-free customer care</h1>
                <p>1-800-222-000</p>
                <p>1-800-222-002</p>
                <h1 className="underline">Need Live support?</h1>
                <p>info@yourdomain.com</p>
                <p>help@yourdomain.com</p>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
