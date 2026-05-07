import { AnimatePresence, motion } from "framer-motion";

const content = {
  about: {
    title: "About Me",
    body: "I am a final-year Bachelor of Computing student majoring in Software Engineering at Curtin University. I enjoy building practical software projects that combine frontend design, backend development, databases, deployment, and problem-solving.",
  },
  projects: {
    title: "Projects",
    body: "This section will showcase selected projects including Finance Tracker, VibeBot, CPU Scheduling Visualizer, EvacuateX, and my Capstone project.",
  },
  skills: {
    title: "Skills",
    body: "React, JavaScript, Node.js, Express, MySQL, Python, Java, C++, ASP.NET Core, Tailwind CSS, Git, GitHub, deployment, testing, and API development.",
  },
  education: {
    title: "Education",
    body: "Bachelor of Computing, Software Engineering major at Curtin University. Also starting a Graduate Certificate of Artificial Intelligence with Monash Online.",
  },
  contact: {
    title: "Contact",
    body: "This section will include links to email, LinkedIn, GitHub, and other professional profiles.",
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TabContent;