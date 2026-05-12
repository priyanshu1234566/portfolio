import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaMapMarkedAlt,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6zx6loj",
        "template_t5db4uh",
        form.current,
        "Mxf5pLeck9HKEDwpr"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Message send nahi hua ❌");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#020617] text-white overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>

      {/* ================= MAP SECTION ================= */}
      <div className="relative z-10 mb-28">
        {/* Heading */}
        <div className="text-center mb-14 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-black flex justify-center items-center gap-4">
            <FaMapMarkedAlt className="text-cyan-400 animate-bounce" />

            Go To{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Map
            </span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Find my current location easily using Google Maps.
          </p>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto rounded-[35px] overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20 hover:scale-[1.01] transition duration-500 animate-fadeIn">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3476.234718593502!2d77.006250075529!3d29.3926889752583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzMzLjciTiA3N8KwMDAnMzEuOCJF!5e0!3m2!1sen!2sin!4v1769920564670!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-black flex justify-center items-center gap-4">
            <FaHeadset className="text-cyan-400 animate-pulse" />

            Get In{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Touch
            </span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
            Have a project idea, collaboration, or opportunity?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          
          {/* CENTER FORM */}
          <div className="w-full max-w-2xl animate-slideUp">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 md:p-10 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-500">
              
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-7"
              >
                
                {/* Name */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Full Name
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full bg-[#0f172a] border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 outline-none transition duration-300"
                    />

                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 text-lg" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Email Address
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full bg-[#0f172a] border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 outline-none transition duration-300"
                    />

                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 text-lg" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Phone Number
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone"
                      className="w-full bg-[#0f172a] border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 outline-none transition duration-300"
                    />

                    <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 text-lg" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Message
                  </label>

                  <div className="relative">
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Write your message..."
                      required
                      className="w-full bg-[#0f172a] border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 outline-none resize-none transition duration-300"
                    ></textarea>

                    <FaCommentDots className="absolute left-5 top-6 text-cyan-400 text-lg" />
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold hover:scale-[1.03] transition duration-300 shadow-xl shadow-cyan-500/20"
                >
                  <span className="flex items-center justify-center gap-3">
                    Send Message

                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                  </span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 1.2s ease forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
      `}</style>
    </section>
  );
}