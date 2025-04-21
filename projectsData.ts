interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "AI Image Classification",
    description: "A deep learning model for classifying images using TensorFlow and CNN architecture.",
    tags: ["Python", "TensorFlow", "CNN"],
    githubUrl: "https://github.com/",
    demoUrl: "#"
  },
  {
    title: "Sentiment Analysis System",
    description: "A web application that analyzes sentiment from text using NLP techniques.",
    tags: ["Python", "NLTK", "Flask"],
    githubUrl: "https://github.com/",
    demoUrl: "#"
  },
  {
    title: "E-Learning Platform",
    description: "A full-stack web application for online courses with user authentication and content management.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/",
    demoUrl: "#"
  }
];
