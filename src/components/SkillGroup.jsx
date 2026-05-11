function SkillGroup({ group }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
      <h3 className="text-lg font-bold text-white">{group.category}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;