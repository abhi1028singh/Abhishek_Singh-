import { useState, useEffect } from "react";
import { Link } from "wouter";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import resumePdf from "../assets/resume.pdf";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on navigation
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle resume download
  const handleResumeDownload = () => {
    saveAs(resumePdf, "Abhishek_Singh_Resume.pdf");
  };

  // Add scroll event listener for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-sans font-bold text-xl">Abhishek Singh</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="#education" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
              Education
            </a>
            <a href="#skills" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
              Contact
            </a>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleResumeDownload}
            >
              Resume
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-gray-700 hover:text-primary focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200 shadow-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#education" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Education
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <Button
            variant="default"
            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90 mt-4"
            onClick={() => {
              handleResumeDownload();
              closeMobileMenu();
            }}
          >
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
}
