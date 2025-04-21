import { educationItems } from "@/data/educationData";

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077b6' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(243,244,246,0.8)",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* Colorful background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/10 to-pink-300/10 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300/10 to-cyan-300/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold text-center font-sans relative inline-block">
            Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 rounded"></span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 via-primary to-primary-200"></div>
          
          {educationItems.map((item, index) => (
            <div key={index} className={`mb-16 relative ${index === educationItems.length - 1 ? 'mb-0' : ''}`}>
              <div className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  // Left side entry
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h3>
                        <p className="text-primary font-medium mb-2">{item.specialization}</p>
                        <p className="text-gray-600 mb-4">{item.institution}</p>
                        <p className="text-gray-500 text-sm">{item.duration}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex z-10 h-12 w-12 rounded-full bg-primary shadow-md items-center justify-center">
                      <span className="text-white text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.icon === 'graduation-cap' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          )}
                        </svg>
                      </span>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </>
                ) : (
                  // Right side entry
                  <>
                    <div className="md:w-1/2 md:pr-12 md:hidden"></div>
                    <div className="hidden md:flex z-10 h-12 w-12 rounded-full bg-primary shadow-md items-center justify-center">
                      <span className="text-white text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.icon === 'graduation-cap' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          )}
                        </svg>
                      </span>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h3>
                        <p className="text-primary font-medium mb-2">{item.specialization}</p>
                        <p className="text-gray-600 mb-4">{item.institution}</p>
                        <p className="text-gray-500 text-sm">{item.duration}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}