function EducationCard({ item }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-300">{item.period}</p>
          <h3 className="mt-2 text-xl font-bold text-white">
            {item.qualification}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate-300">
            {item.institution}
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200">
          {item.location}
        </span>
      </div>

      <p className="mt-4 text-sm font-medium text-cyan-100">{item.focus}</p>

      <p className="mt-4 text-sm leading-7 text-slate-300">
        {item.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200"
          >
            {highlight}
          </span>
        ))}
      </div>
    </article>
  );
}

export default EducationCard;