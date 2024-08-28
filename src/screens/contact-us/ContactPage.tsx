import WHNavbar from "@/components/common/WHNavbar";
import WHFillButton from "@/components/common/WHFillButton";
import WHFooter from "@/components/common/WHFooter";

export default function ContactUs() {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        {/* Top Left Background Image */}
        <img
          className="absolute lg:top-[-12rem] lg:left-[-24rem] sm:top-[-5rem] sm:left-[-10rem] top-[-5rem] left-[-10rem] -z-20"
          src="green-blur-blob.png"
          alt="Top Left Decoration"
        />
        {/* Bottom Right Background Image */}
        <img
          className="absolute lg:bottom-[-12rem] lg:right-[-24rem] sm:bottom-[-5rem] sm:right-[-10rem] bottom-[-5rem] right-[-10rem] -z-20"
          src="green-blur-blob.png"
          alt="Bottom Right Decoration"
        />

        {/* Navbar */}
        <WHNavbar dark />

        <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1C57] font-bold text-center mb-8 mt-24 sm:mt-32 lg:mt-12">
            Contact Us!
          </h2>

          {/* Container for Form and Map */}
          <div className="flex flex-col md:flex-col lg:flex-row rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 space-y-6 lg:space-y-0 lg:space-x-8 relative z-10">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 lg:pl-12">
              <form className="space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {/* Mobile Input */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md h-32 resize-none shadow-md"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div>
                  <WHFillButton title="send"></WHFillButton>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:pr-12 flex justify-center items-center">
              <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] md:h-[500px] h-[400px] mb-24 lg:mb-0">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89797313168!2d77.04417451233647!3d28.52755440771719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0314ca599f2f%3A0x5d4a0525be09a9c8!2sRicoz!5e0!3m2!1sen!2sin!4v1724835316732!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="rounded-lg shadow-lg border-4 border-white"
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WHFooter />
    </div>
  );
}
