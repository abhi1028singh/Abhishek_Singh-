import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectsData";

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230077b6' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundAttachment: "fixed",
        backgroundColor: "#ffffff",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* Colorful background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-300/10 to-purple-300/10 blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/10 to-sky-300/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold text-center font-sans relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}