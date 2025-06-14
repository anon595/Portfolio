import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: "html5.svg", level: 95, category: "frontend" },
  {
    name: "JavaScript",
    icon: "javascript.svg",
    level: 90,
    category: "frontend",
  },
  { name: "React", icon: "react.svg", level: 90, category: "frontend" },
  { name: "Three.js", icon: "threedotjs.svg", level: 85, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss.svg",
    level: 90,
    category: "frontend",
  },
  { name: "Vue.js", icon: "vuedotjs.svg", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodedotjs.svg", level: 80, category: "backend" },
  { name: "Express", icon: "express.svg", level: 75, category: "backend" },
  { name: "MongoDB", icon: "mongodb.svg", level: 70, category: "backend" },
  { name: "Flask", icon: "flask.svg", level: 80, category: "backend" },
  { name: "Python", icon: "python.svg", level: 80, category: "backend" },

  // Tools
  { name: "Webstorm", icon: "webstorm.svg", level: 90, category: "tools" },
  { name: "Git/GitHub", icon: "github.svg", level: 70, category: "tools" },
  { name: "Figma", icon: "figma.svg", level: 85, category: "tools" },
  { name: "VS Code", icon: "virtualbox.svg", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <img
                  src={`/Skills/${skill.icon}`}
                  alt={skill.name}
                  className="w-6 h-6 filter dark:invert dark:brightness-100"
                />
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
