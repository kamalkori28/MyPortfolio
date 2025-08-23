import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 text-center glass hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Ai-Chatbot</h3>
              <p className="text-white mb-4">Built an AI-powered chatbot using Next.js and REST API, delivering contextual responses with efficient state
management and responsive design for cross-device support</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js","REST API" ,"JS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/kamalkori28/Aichatbot"
                  className="relative group text-white hover:text-cyan-400 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 text-center glass hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">E-Commerce Web App</h3>
              <p className="text-white mb-4">
                Responsive e-commerce frontend built using HTML, CSS, and JavaScript. Features include a modern UI, product listing, shopping cart functionality, and smooth user interactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JS", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/kamalkori28/Ecommerce-Website"
                  className="relative group text-white hover:text-cyan-400 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 text-center glass hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Travel Tales</h3>
              <p className="text-white mb-4">
                A dynamic and responsive travel booking website with modern UI. Built using HTML, CSS, JavaScript, Php , and Tailwind CSS. Includes features like destination listings, contact forms, and booking functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JS", "TAILWIND CSS", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/kamalkori28/TravelTales/tree/main/major_project_24"
                  className="relative group text-white hover:text-cyan-400 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 text-center glass hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Password Generator</h3>
              <p className="text-white mb-4">
                A secure and easy-to-use password generator built using HTML, CSS, and JavaScript. Allows users to generate strong, customizable passwords with options like length, uppercase, lowercase, numbers, and symbols.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/kamalkori28/PasswordGen"
                  className="relative group text-white hover:text-cyan-400 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
