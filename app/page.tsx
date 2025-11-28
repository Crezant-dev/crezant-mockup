import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/95 border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
          <div className="flex items-center gap-3">
            <Image
              src="/typeLogo.svg"
              alt="Crezant logo"
              width={140}
              height={70}
              className="h-25 w-auto"
              priority
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-[var(--crezant-blue)]">
              Services
            </a>
            <a href="#why" className="hover:text-[var(--crezant-blue)]">
              Why us
            </a>
            <a href="#process" className="hover:text-[var(--crezant-blue)]">
              Process
            </a>
            <a href="#contact" className="hover:text-[var(--crezant-blue)]">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[var(--crezant-blue)] px-4 py-2 text-white shadow-sm transition hover:bg-[var(--crezant-navy)]"
            >
              Start a project
            </a>
          </nav>
          <button className="md:hidden rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700">
            Menu
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--crezant-navy)] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                Minimal tech studio
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Clean, modern systems for real businesses.
              </h1>
              <p className="text-lg text-slate-200">
                Crezant designs and builds reliable digital products, from
                custom web apps to automation that keeps your team focused on
                what matters.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-[var(--crezant-blue)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(0,0,0,0.2)] transition hover:bg-[var(--crezant-blue)]/90"
                >
                  Start a project
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
                >
                  View capabilities
                </a>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5">
              <div className="absolute inset-0">
                <div className="orbit inset-[-5%]" />
                <div className="orbit inset-[12%]" />
                <div className="orbit inset-[30%]" />
                <div className="orbit inset-[48%]" />
                <div className="orbit-dot left-[18%] top-[30%]" />
                <div className="orbit-dot left-[72%] top-[18%]" />
                <div className="orbit-dot left-[65%] top-[70%]" />
                <div className="orbit-line left-[10%] top-[15%] w-[80%] rotate-[12deg]" />
                <div className="orbit-line left-[20%] top-[60%] w-[70%] rotate-[-14deg]" />
                <div className="absolute inset-[22%] rounded-full border border-white/20 bg-white/5 backdrop-blur-sm" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.12)]" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-[var(--crezant-slate)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--crezant-blue)]">
                  Capabilities
                </p>
                <h2 className="text-3xl font-semibold text-[var(--crezant-dark)]">
                  Build the exact tool you need
                </h2>
              </div>
              <div className="hidden text-sm text-slate-600 md:block">
                Precise systems, delivered with clarity.
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Custom Web Apps",
                  body: "Product-grade experiences tailored to your workflow, not templates.",
                },
                {
                  title: "Automation & Internal Tools",
                  body: "Connect data, remove manual steps, and keep teams aligned automatically.",
                },
                {
                  title: "Technical Consulting",
                  body: "Architecture guidance, audits, and pragmatic roadmaps for shipping fast.",
                },
              ].map((item) => (
                <div key={item.title} className="card-surface p-6">
                  <div className="mb-3 h-10 w-10 rounded-full bg-[var(--crezant-blue)]/10" />
                  <h3 className="text-xl font-semibold text-[var(--crezant-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Crezant */}
        <section
          id="why"
          className="border-t border-b border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-[var(--crezant-blue)]">
                Why Crezant
              </p>
              <h2 className="text-3xl font-semibold text-[var(--crezant-dark)]">
                Thoughtful delivery, zero fluff.
              </h2>
              <p className="text-slate-700">
                We focus on clarity: sharp architecture, crisp interfaces, and
                the right level of automation. Every build is scoped to what
                makes your operation run smooth.
              </p>
              <p className="text-slate-700">
                Work directly with the engineer that builds your critical
                systems -- no endless handoffs, just steady progress and
                transparent communication.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-surface p-5">
                <h4 className="text-lg font-semibold text-[var(--crezant-dark)]">
                  Principles
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>- Ship small, iterate fast</li>
                  <li>- Adaptable, not rigid</li>
                  <li>- Clear artifacts: docs, diagrams, handover</li>
                </ul>
              </div>
              <div className="card-surface p-5">
                <h4 className="text-lg font-semibold text-[var(--crezant-dark)]">
                  Ideal Projects
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>- Internal platforms & dashboards</li>
                  <li>- Data flows, APIs, integrations</li>
                  <li>- New product foundations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="bg-[var(--crezant-slate)] border-b border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-8">
              <p className="text-sm font-semibold text-[var(--crezant-blue)]">
                Process
              </p>
              <h2 className="text-3xl font-semibold text-[var(--crezant-dark)]">
                A steady, transparent cadence
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                {
                  title: "Discover",
                  body: "Map objectives, constraints, and data sources.",
                },
                {
                  title: "Design",
                  body: "Define flows, system shape, and interface states.",
                },
                {
                  title: "Build",
                  body: "Implement with guardrails: tests, monitoring, docs.",
                },
                {
                  title: "Support",
                  body: "Stabilize, iterate, and hand off cleanly.",
                },
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className="card-surface flex flex-col gap-3 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--crezant-blue)]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--crezant-dark)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-[var(--crezant-navy)] text-white border-b border-white/10"
        >
          <div className="mx-auto max-w-6xl grid gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[var(--crezant-gray)]">
                Contact
              </p>
              <h2 className="text-3xl font-semibold leading-tight">
                Have something you want built?
              </h2>
              <p className="text-slate-200">
                Tell us about your workflow, product vision, or the manual work
                you want to eliminate. We respond with a concise plan and
                timeline.
              </p>
              <a
                href="mailto:hello@crezant.com"
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--crezant-navy)] shadow-lg shadow-[rgba(0,0,0,0.25)] transition hover:-translate-y-0.5"
              >
                Email hello@crezant.com
              </a>
            </div>
            <div className="card-surface bg-white/5 border-white/10 text-slate-100">
              <div className="border-b border-white/10 px-5 py-4 text-sm font-semibold tracking-wide uppercase text-[var(--crezant-gray)]">
                Helpful details
              </div>
              <ul className="space-y-3 px-5 py-5 text-sm text-slate-100">
                <li>- Current systems + tools you rely on</li>
                <li>- Data sources / APIs to connect</li>
                <li>- Desired outcomes & team workflows</li>
                <li>- Timeline and key milestones</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-sm text-slate-600">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 sm:flex-row sm:items-center">
          <span>(c) {new Date().getFullYear()} Crezant. All rights reserved.</span>
          <a
            href="mailto:hello@crezant.com"
            className="font-semibold text-[var(--crezant-blue)] hover:text-[var(--crezant-navy)]"
          >
            hello@crezant.com
          </a>
        </div>
      </footer>
    </div>
  );
}
