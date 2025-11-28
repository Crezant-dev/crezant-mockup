// app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* TODO: replace this circle with your real C SVG */}
            <div className="h-9 w-9 rounded-full flex items-center justify-center bg-[#1F4475] text-white font-display text-xl">
              C
            </div>
            <span className="font-display font-semibold tracking-[0.18em] text-xs uppercase text-slate-800">
              Crezant
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#process" className="hover:text-slate-900">
              Process
            </a>
            <a href="#work" className="hover:text-slate-900">
              Work
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#1F4475] px-4 py-1.5 text-sm font-medium text-white hover:bg-slate-900 transition"
            >
              Start a project
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-[#0F223D] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.28em] uppercase text-slate-300 mb-4">
                Minimal tech studio
              </p>
              <h1 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6">
                Clean, modern systems
                <br className="hidden md:block" />
                for real businesses.
              </h1>
              <p className="text-sm md:text-base text-slate-200 mb-8 max-w-xl">
                Crezant designs and builds minimal, efficient web apps and
                automations that make your operations feel simple, not
                overwhelming.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0F223D] hover:bg-slate-100 transition"
                >
                  Start a project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full border border-slate-500 px-5 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 transition"
                >
                  View capabilities
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Hero visual */}
              <div className="aspect-[4/3] rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-[#1F4475]/40 overflow-hidden">
                <div className="absolute inset-0">
                  {/* Orbit rings */}
                  <div className="absolute inset-[-20%] rounded-full border border-slate-700/50" />
                  <div className="absolute inset-[10%] rounded-full border border-slate-700/40" />
                  <div className="absolute inset-[30%] rounded-full border border-slate-700/30" />
                  {/* Diagonal line */}
                  <div className="absolute -left-10 top-1/4 h-px w-[140%] bg-gradient-to-r from-transparent via-slate-500/70 to-transparent rotate-[-8deg]" />
                  {/* Nodes */}
                  <div className="absolute right-10 top-10 h-1.5 w-1.5 rounded-full bg-[#1F4475]" />
                  <div className="absolute left-16 bottom-16 h-2 w-2 rounded-full bg-slate-100" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300 mb-2">
                    System view
                  </p>
                  <p className="text-xs text-slate-200 max-w-xs">
                    From workflows and automations to full web applications,
                    Crezant builds focused systems that stay out of your way and
                    get the job done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10">
              <p className="font-display text-xs tracking-[0.28em] uppercase text-slate-500 mb-3">
                Services
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                What Crezant builds.
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Clean, focused tools that match how you actually work. No bloat,
                no overcomplication—just systems designed to be used every day.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Custom Web Apps
                </h3>
                <p className="text-sm text-slate-600">
                  Tailored browser-based tools that match your workflows. Fast,
                  focused, and built to be extended when you’re ready.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Automations &amp; Internal Tools
                </h3>
                <p className="text-sm text-slate-600">
                  Turn time-consuming, repetitive work into reliable
                  automations. Connect the tools you already use, or replace
                  them with something cleaner.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Technical Consulting
                </h3>
                <p className="text-sm text-slate-600">
                  Architecture, integrations, and systems thinking for small
                  teams that want modern infrastructure without enterprise
                  overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CREZANT */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-start">
            <div>
              <p className="font-display text-xs tracking-[0.28em] uppercase text-slate-500 mb-3">
                Philosophy
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Built to be clear, not clever.
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-4">
                Crezant takes complex requirements and turns them into calm,
                minimal systems. Interfaces stay clean. Logic stays transparent.
                The result is software that feels reliable instead of fragile.
              </p>
              <p className="text-sm md:text-base text-slate-600">
                Communication is direct, technical when needed, and always
                grounded in your real workflows—not abstract jargon.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-display text-sm font-semibold text-slate-900 mb-2">
                  Principles
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  <li>• Minimal, opinionated interfaces</li>
                  <li>• Clear ownership of every feature and function</li>
                  <li>• No “just in case” features</li>
                  <li>• Favor boring, reliable tech over hype</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-display text-sm font-semibold text-slate-900 mb-2">
                  Ideal projects
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  <li>
                    • Internal tools that never quite fit off-the-shelf
                    products
                  </li>
                  <li>• Operational workflows that need to be streamlined</li>
                  <li>• Early products that need a clean technical foundation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10">
              <p className="font-display text-xs tracking-[0.28em] uppercase text-slate-500 mb-3">
                Process
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                A straightforward, technical process.
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                No big reveals, no mystery. Just a simple, transparent flow from
                first message to working software.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Discover",
                  body: "Map your workflows, constraints, and goals. Understand what actually needs solving.",
                },
                {
                  step: "02",
                  title: "Design",
                  body: "Sketch lean flows and interfaces that stay focused on the core job.",
                },
                {
                  step: "03",
                  title: "Build",
                  body: "Implement with clean, modern code and a bias toward maintainability.",
                },
                {
                  step: "04",
                  title: "Support",
                  body: "Light-touch support, refinement, and iteration as your needs evolve.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-2">
                  <div className="text-xs font-medium text-slate-500">
                    {item.step}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK PREVIEW */}
        <section id="work" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.28em] uppercase text-slate-500 mb-3">
                  Work
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                  A glimpse at the kind of systems Crezant builds.
                </h2>
                <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                  Specific client work can stay private. Here’s how typical
                  projects are shaped and what they unlock.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-2">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.17em]">
                  Internal Ops Dashboard
                </p>
                <p className="text-sm text-slate-700">
                  Unified view of daily metrics, tasks, and incidents for a
                  small team—replacing three disconnected tools.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-2">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.17em]">
                  Automation Layer
                </p>
                <p className="text-sm text-slate-700">
                  Event-driven automations that handle repetitive data entry
                  between systems quietly in the background.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-2">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.17em]">
                  Lightweight Client Portal
                </p>
                <p className="text-sm text-slate-700">
                  Minimal, brand-aligned portal for clients to submit requests,
                  view status, and download deliverables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-16 md:py-20 bg-[#0F223D] text-white"
        >
          <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.28em] uppercase text-slate-300 mb-3">
                Contact
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Have something you want built?
              </h2>
              <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl">
                Describe what’s messy, overcomplicated, or fragile in your
                current setup. You’ll get a calm, technical response and a clear
                next step—no pressure.
              </p>
              <a
                href="mailto:brian@crezant.com"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0F223D] hover:bg-slate-100 transition"
              >
                Email Crezant
              </a>
            </div>
            <div className="space-y-4 text-sm text-slate-200">
              <p className="text-slate-300">Helpful things to include:</p>
              <ul className="space-y-1.5">
                <li>• What tools you’re currently using</li>
                <li>• What feels slow, manual, or error-prone</li>
                <li>• Any internal deadlines or constraints</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Crezant. All rights reserved.
          </span>
          <span className="flex gap-4">
            <a
              href="mailto:brian@crezant.com"
              className="hover:text-slate-700"
            >
              brian@crezant.com
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
