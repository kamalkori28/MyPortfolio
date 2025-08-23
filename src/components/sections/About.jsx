import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 bg-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Text */}
          <div className="md:col-span-2 text-center glass p-6 rounded-xl border border-white/10 
  hover:-translate-y-1 
  hover:border-cyan-400 
  hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] 
  transition duration-300 ease-in-out">
  <p className="text-white mb-6 text-lg">
My journey into web development began with a simple curiosity: "How do websites actually work?" That curiosity quickly turned into a passion for creating clean, interactive, and user-focused interfaces.
<br></br>
<br></br>
Over time, I honed my skills in HTML, CSS, JavaScript, and React — building responsive designs and smooth user experiences.I enjoy turning complex design ideas into functional, pixel-perfect websites. Every line of code I write reflects my attention to detail and drive for quality.
<br></br>
<br></br>
I'm constantly exploring new frontend tools and trends to keep improving and staying current in this ever-evolving field.
  </p>
</div>

<br></br>
          {/* Skills & Technologies */}
          <div className="md:col-span-2 text-center glass p-6 rounded-xl border border-white/10 
  hover:-translate-y-1 
  hover:border-cyan-400 
  hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] 
  transition duration-300 ease-in-out">
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">⚙️ Skills & Technologies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-15 justify-items-center">
              {[
                { name: "HTML", icon: "/icons/html.svg" },
                { name: "CSS", icon: "/icons/css.svg" },
                { name: "JavaScript", icon: "/icons/js.svg" },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Tailwind", icon: "/icons/tailwind.svg" },
                { name: "", icon: "/icons/php.svg" },
                { name: "", icon: "/icons/mysql.svg" },
                { name: "", icon: "/icons/c.svg" },
                { name: "", icon: "/icons/cpp.svg" },
                { name: "", icon: "/icons/python.svg" },
                { name: "git", icon: "/icons/git.svg" },
              ].map((tech, key) => (
                <div
                  key={key}
                  className="flex flex-col items-center text-white hover:scale-105 transition"
                >
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2 " />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="md:col-span-2 text-center glass p-6 rounded-xl border border-white/10 
  hover:-translate-y-1 
  hover:border-cyan-400 
  hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] 
  transition duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">🏫 Education</h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>
                  <strong>B.Tech in Computer Science</strong> - Gyan Ganga College of Technology (2021-2025)  
                  <br />
                  <strong>CGPA - 7.28</strong>
                </li>
                <li>
                  <strong>12th</strong> - Shri Ram Krishna Aashram Jabalpur (M.P.) (2018-2019)  
                  <br />
                  <strong>Percentage - 79%</strong>
                </li>
                <li>
                  <strong>10th</strong> - Shri Ram Krishna Aashram Jabalpur (M.P.) (2020-2021)  
                  <br />
                  <strong>Percentage - 76%</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
