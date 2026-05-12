import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { skillGroups } from "../data/skills";
import SkillGroup from "./SkillGroup";
import { education } from "../data/education";
import EducationCard from "./Education";
import { contactLinks } from "../data/contactLinks";
import ContactCard from "./ContactCard";

const content = {
  about: {
    title: "About Me",
    body: "Software Engineering Graduate heavy on project-based learning. Life is short, so I made a portfolio page. My repertoire consists of J cole and Westlife radio mixtapes.",
    highlights: [
      "Full Stack projects",
      "Js Frameworks, RAG and Multi-Agent Systems",
      "ML training models and path finding algorithms"
    ]
  },
  projects: {
    title: "Projects",
    body: "A selection of practical software projects I have built or contributed to, covering full-stack development, AI-inspired tools, algorithm visualisation, deployment, and systems-focused problem solving.",
  },
  skills: {
    title: "Skills",
    body: "A summary of the technologies, languages, tools, and development areas I have used across university, and personal software projects.",
  },
  education: {
    title: "Education",
    body:  "My academic background combines software engineering, practical computing projects, and upcoming postgraduate study in artificial intelligence.",
  },
  contact: {
    title: "Contact",
    body: "I am open to graduate software engineering opportunities, internships, collaborative projects, and professional networking. Feel free to reach out through any of the links below.",
  },
};

function TabContent({ activeTab }) {
  const currentContent = content[activeTab];

  return (
    <div className="mt-8 min-h-65 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.25 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold text-white">
            {currentContent.title}
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            {currentContent.body}
          </p>
          {currentContent.highlights && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {currentContent.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-medium text-slate-200"
                >
                  {highlight}
                </div>
              ))}
            </div>
          )}

          {activeTab === "projects" && (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <SkillGroup key={group.category} group={group} />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <EducationCard key={item.institution} item={item} />
              ))}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {contactLinks.map((contact) => (
                <ContactCard key={contact.label} contact={contact} />
              ))}
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TabContent;