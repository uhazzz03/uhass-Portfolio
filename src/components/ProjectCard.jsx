import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-300">{project.type}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
        </div>

        {project.featured && (
          <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200">
            Featured
          </span>
        )}
      </div>

      <p className="flex-1 text-sm leading-7 text-slate-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            GitHub
            <ExternalLink size={14} />
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
        )}

        {project.reportLink && (
            <a
                href={project.reportLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
                Reports
                <ExternalLink size={14} />
            </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;