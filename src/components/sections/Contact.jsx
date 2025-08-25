import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from "emailjs-com"; // Or use @emailjs/browser
import emailjs from "@emailjs/browser";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
       "service_6tufane",
    "template_6rsuj4e",
    e.target,
    "9oSqWP31qhHMfi22H"
      )
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatusMessage(""), 4000);
      })
      .catch(() => {
        setStatusMessage("❌ Failed to send message. Try again.");
        setIsSuccess(false);

        setTimeout(() => setStatusMessage(""), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400 bg-clip-text  text-center">
            Get In Touch
          </h2>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`mb-4 text-center px-4 py-2 rounded ${
                isSuccess ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
              } border ${isSuccess ? "border-green-500" : "border-red-500"}`}
            >
              {statusMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5  px-4 py-3 text-white  focus:outline-none  focus:bg-blue-500/5
              glass rounded-xl border border-white/10 hover:-translate-y-1 focus:border-cyan-500 
               hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5  px-4 py-3 text-white  focus:outline-none  focus:bg-blue-500/5
              glass rounded-xl border border-white/10 hover:-translate-y-1 focus:border-cyan-500 
               hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out"
            />

            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5  px-4 py-3 text-white  focus:outline-none  focus:bg-blue-500/5
              glass rounded-xl border border-white/10 hover:-translate-y-1 focus:border-cyan-500 
               hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out"/>

           <button
  type="submit"
  className="py-3 px-6 rounded relative overflow-hidden w-full 
  bg-cyan-400 text-white font-bold text-xl
  focus:outline-none focus:bg-cyan-500/10
  border border-white/10 glass 
  hover:-translate-y-1 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500
  hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
  transition duration-300 ease-in-out group"
>
  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:animate-pulse">
    Send Message
  </span>
</button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
