import { useState } from "react";
import { Download } from "lucide-react";
import TabNavigation from "./components/TabNavigation";
import TabContent from "./components/TabContent";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-white">
      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            Personal Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Uhass Medan Jayaweera
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Software Engineering Graduate building practical web applications, AI-inspired tools, and problem-solving projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/UhassMedanJayaweera_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Download size={18} />
              Download CV
            </a>

            <a
              href="https://github.com/uhazzz03"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              <span className ="text-lg">⌘</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/uhassjayaweera/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-xs font-bold text-slate-950">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabContent activeTab={activeTab} />
      </section>
    </main>
  );
}

export default App;