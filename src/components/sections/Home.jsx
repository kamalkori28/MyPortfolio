import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[url('/Kamal-Portfolio/bgImg/bg_portfolio.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent leading-tight drop-shadow-md">
            Hi, I'm Kamal Kori
          </h1>

          <p className="text-white text-lg mb-8 max-w-xl mx-auto drop-shadow-sm">
            "I'm a Computer Science graduate (2025) passionate about building real-world web applications using JavaScript, React, and Node.js. I enjoy solving problems through clean, efficient code and continuously learning new technologies."
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Kamal-Portfolio/ResumeD/MY_Resume2025.pdf"
              download="Kamal_Kori_CV.pdf"
              className="py-3 px-6 rounded bg-cyan-400 text-white font-bold text-xl border border-white/10 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="py-3 px-6 rounded bg-black text-cyan-400 font-bold text-xl border border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
