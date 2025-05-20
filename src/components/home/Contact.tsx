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
        <div className="flex flex-col md:flex-row p-6 md:p-12 bg-white text-gray-800">
          {/* Left Info Box */}
          <div className="bg-indigo-600 text-white w-full md:w-1/2 p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 border-b border-white w-fit">
                Keep in touch?
              </h2>
              <p>401 Broadway, 24th Floor,</p>
              <p>Orchard View, London</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 border-b border-white w-fit">
                Toll free customer care?
              </h2>
              <p>1-800-222-000</p>
              <p>1-800-222-002</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 border-b border-white w-fit">
                Need live support?
              </h2>
              <p>info@yourdomain.com</p>
              <p>help@yourdomain.com</p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-6">
              Feel free to reach via contact us form.
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                placeholder="Your email address*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                placeholder="Your message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={5}
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md shadow hover:bg-gray-700 transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
