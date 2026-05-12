import { ExternalLink } from "lucide-react";

function ContactCard({ contact }) {
  return (
    <a
      href={contact.href}
      target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noreferrer"
      className="group rounded-3xl border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-300">{contact.label}</p>
          <p className="mt-2 break-all text-base font-semibold text-white">
            {contact.value}
          </p>
        </div>

        <ExternalLink
          size={18}
          className="text-slate-400 transition group-hover:text-cyan-300"
        />
      </div>
    </a>
  );
}

export default ContactCard;