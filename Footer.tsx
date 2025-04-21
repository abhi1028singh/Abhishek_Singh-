export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Abhishek Singh</p>
            <p className="text-gray-300">B.Tech in Computer Science with AI Specialization</p>
          </div>
          <div>
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Abhishek Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
