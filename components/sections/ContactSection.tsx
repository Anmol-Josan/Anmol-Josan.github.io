import { Download, Github, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <footer className="bg-ink py-24">
      <div className="section-shell">
        <div className="thin-rule mb-12" />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
              Contact
            </p>
            <h2 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight text-paper sm:text-7xl">
              Let&apos;s build something with a real feedback loop.
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-3">
            <a
              href={`mailto:${profile.contact.email}`}
              className="group flex items-center justify-between border border-line px-5 py-4 text-paper transition hover:border-moss hover:bg-moss/10 focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-ink"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-moss" aria-hidden="true" />
                {profile.contact.email}
              </span>
              <MoveUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <a
              href={profile.contact.github}
              className="group flex items-center justify-between border border-line px-5 py-4 text-paper transition hover:border-cyan hover:bg-cyan/10 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-ink"
            >
              <span className="flex items-center gap-3">
                <Github className="h-5 w-5 text-cyan" aria-hidden="true" />
                GitHub
              </span>
              <MoveUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <a
              href={profile.contact.linkedin}
              className="group flex items-center justify-between border border-line px-5 py-4 text-paper transition hover:border-amber hover:bg-amber/10 focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-ink"
            >
              <span className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-amber" aria-hidden="true" />
                LinkedIn
              </span>
              <MoveUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <a
              href={profile.contact.resume}
              download
              className="mt-4 inline-flex items-center justify-center gap-3 bg-paper px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink transition hover:bg-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-ink"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
