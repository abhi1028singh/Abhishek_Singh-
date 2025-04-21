interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      {
        name: "Python",
        level: "Advanced",
        percentage: 90
      },
      {
        name: "Java",
        level: "Intermediate",
        percentage: 75
      },
      {
        name: "C++",
        level: "Intermediate",
        percentage: 70
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      {
        name: "TensorFlow",
        level: "Intermediate",
        percentage: 75
      },
      {
        name: "PyTorch",
        level: "Intermediate",
        percentage: 70
      },
      {
        name: "Natural Language Processing",
        level: "Basic",
        percentage: 60
      }
    ]
  },
  {
    title: "Web Development",
    icon: "laptop-code",
    skills: [
      {
        name: "HTML/CSS",
        level: "Advanced",
        percentage: 85
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        percentage: 75
      },
      {
        name: "React",
        level: "Basic",
        percentage: 60
      }
    ]
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      {
        name: "MySQL",
        level: "Intermediate",
        percentage: 80
      },
      {
        name: "MongoDB",
        level: "Basic",
        percentage: 65
      },
      {
        name: "PostgreSQL",
        level: "Basic",
        percentage: 50
      }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "tools",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        percentage: 85
      },
      {
        name: "Docker",
        level: "Intermediate",
        percentage: 70
      },
      {
        name: "AWS",
        level: "Basic",
        percentage: 55
      }
    ]
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: [
      {
        name: "Communication",
        level: "Advanced",
        percentage: 90
      },
      {
        name: "Problem Solving",
        level: "Advanced",
        percentage: 95
      },
      {
        name: "Teamwork",
        level: "Advanced",
        percentage: 85
      }
    ]
  }
];
