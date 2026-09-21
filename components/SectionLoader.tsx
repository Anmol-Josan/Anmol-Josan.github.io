export default function SectionLoader({ label }: { label: string }) {
  return (
    <section className="section-shell flex min-h-[40vh] items-center justify-center py-24">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted">
        <span className="h-2 w-2 animate-pulse rounded-full bg-moss" />
        {label}
      </div>
    </section>
  );
}
