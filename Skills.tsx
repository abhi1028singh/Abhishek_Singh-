import SkillCard from "./SkillCard";
import { skillCategories } from "@/data/skillsData";

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230077b6' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5v-1H1.5z'/%3E%3Cpath d='M6 5v1H5V5z'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundAttachment: "fixed",
        backgroundColor: "#f9fafb",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* Colorful background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-green-300/10 to-teal-300/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-300/10 to-orange-300/10 blur-3xl animate-blob"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold text-center font-sans relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}