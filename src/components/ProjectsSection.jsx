import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gold Invest Landing Page",
    description: "A beautiful landing page app using Html/Css/Javascript/GSAP.",
    video: "/projects/project1.mp4",
    tags: ["Html", "CSS", "Javascript", "GSAP"],
    githubUrl: "https://github.com/anon595/invest-company-animated-site",
  },
  {
    id: 2,
    title: "NFT Landing Page",
    description:
      "Sophisticated landing page for an NFT collection, featuring engaging visual design, immersive storytelling, and clear calls to action for acquisition.",
    video: "/projects/project2.mp4",
    tags: ["Html", "Css", "Javascript", "GSAP"],
    githubUrl: "https://github.com/anon595/Web-Animation-Demo",
  },
  {
    id: 3,
    title: "Gym Page",
    description:
      "Modern and responsive landing page for a gym agency, focused on strong visual design and smooth animations.",
    video: "/projects/project3.mp4",
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "https://github.com/anon595/gym-landing-page",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  src={project.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded animate-bounce">
                  👆🏼 hover to play
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-start">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/anon595"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
