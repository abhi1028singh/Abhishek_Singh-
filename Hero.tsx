import { Button } from "@/components/ui/button";
import profileImage from "../assets/profile-image.jpg";

export default function Hero() {
  return (
    <section 
      id="about" 
      className="pt-28 pb-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(0,119,182,0.1) 0%, rgba(124,58,237,0.05) 100%)",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23bbdefb' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated colorful shapes in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300/20 to-green-300/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300/20 to-cyan-300/20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-sans">
              Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Abhishek Singh</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-sans">
              B.Tech in Computer Science with AI Specialization
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              A passionate computer science student specializing in artificial intelligence. 
              Looking to leverage my skills and knowledge to solve real-world problems through 
              innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                variant="outline" 
                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 blur-lg -z-10"></div>
              
              <div className="h-[400px] w-[350px] md:h-[500px] md:w-[420px] bg-gradient-to-br from-blue-100 to-primary-50 flex items-center justify-center overflow-hidden border-6 border-white shadow-xl transform transition-transform hover:scale-105 duration-300 relative z-10 rounded-2xl">
                <img
                  src={profileImage}
                  alt="Abhishek Singh"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
