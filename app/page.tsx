export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center rounded-full border border-slate-700/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300/80">
          Crezant
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Modern apps & automations,{" "}
            <span className="text-sky-400">built for real work.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed">
            Crezant is a one-person dev studio crafting focused tools, custom
            integrations, and lean web apps for teams who are tired of
            clunky software and manual workflows.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-slate-400">
            Launching soon
          </p>
          <p className="text-sm sm:text-base text-slate-200/90">
            In the meantime, reach out directly at{" "}
            <a
              href="mailto:brian@crezant.com"
              className="font-medium text-sky-400 hover:text-sky-300 underline underline-offset-4"
            >
              brian@crezant.com
            </a>
            .
          </p>
        </div>

        <div className="pt-4 text-xs sm:text-sm text-slate-500/90">
          <p>Custom web apps · API integrations · Workflow automation</p>
        </div>
      </div>
    </main>
  );
}
