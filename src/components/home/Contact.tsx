import { RiArrowDropDownLine } from "react-icons/ri";

function Contact() {
  return (
    <div>
      <div>
        {/* section 1 start*/}
        <div className="bg-[#1a2c58] h-[480px] flex justify-center items-center flex-col">
          <h1 className="w-[90%] text-center xs:text-[40px] lg:text-[76px] text-white my-[20px] font-BeVietnam">
            Contact Listacc
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
                Our Office Location
              </h2>
              <p>3rd Floor, Dreamlinks Concept Building,</p>
              <p>Mile 50 District, Abakaliki, Nigeria</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 border-b border-white w-fit">
                Business Inquiries
              </h2>
              <p>+234 (0) 813-869-9452</p>
              <p>+234 (0) 816-630-0937</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 border-b border-white w-fit">
                Email Support
              </h2>
              <p>info@listacc.com</p>
              <p>mail.listacc@gmail.com</p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-6">
              Let's discuss your software development needs.
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
                placeholder="Tell us about your project requirements"
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
