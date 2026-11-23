import Link from "next/link";

const nav = [
  ["Our Story", "#story"],
  ["Experience", "#experience"],
  ["Visit", "#visit"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="relative z-10 flex items-center justify-between border-b border-[var(--line)] px-6 py-5 md:px-12">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.32em]">
          The Rum's Cafe
        </Link>
        <nav aria-label="Main navigation" className="hidden gap-8 text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:flex">
          {nav.map(([label, href]) => <Link key={label} href={href} className="transition-colors hover:text-[var(--cream)]">{label}</Link>)}
        </nav>
        <Link href="#visit" className="border border-[var(--bronze)] px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[var(--bronze)] hover:text-[var(--espresso)]">
          Plan a visit
        </Link>
      </header>

      <section className="relative flex min-h-[82svh] items-end px-6 pb-16 pt-24 md:px-12 md:pb-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(183,139,88,0.22),transparent_42%),linear-gradient(115deg,#17110e_12%,#2b1d16_58%,#17110e)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:"url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.5%22/%3E%3C/svg%3E')"}} />
        <div className="relative max-w-5xl">
          <p className="mb-7 text-[10px] uppercase tracking-[0.38em] text-[var(--bronze)]">A place to pause · A space to connect</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.055em] md:text-8xl lg:text-[7.5rem]">
            An experience<br /><span className="text-[var(--bronze)] italic">worth lingering in.</span>
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
            The new digital home of The Rum's Cafe is taking shape. Explore the story, discover the experience, and find your way to us.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#experience" className="bg-[var(--cream)] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--espresso)] transition-transform hover:-translate-y-1">Explore the experience</Link>
            <Link href="#visit" className="border border-[var(--line)] px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-[var(--bronze)]">Find out more</Link>
          </div>
        </div>
        <div className="absolute bottom-7 right-6 hidden text-[9px] uppercase tracking-[0.25em] text-[var(--muted)] md:block">The Rum's Cafe · Digital experience</div>
      </section>

      <section id="story" className="grid gap-8 border-t border-[var(--line)] px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:px-12 md:py-32">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">01 / The story</p>
        <div>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">Good spaces make room for good moments.</h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)]">This section will tell the cafe's story using approved brand history, photography and details. No unverified claims are published in this foundation build.</p>
        </div>
      </section>

      <section id="experience" className="border-t border-[var(--line)] bg-[var(--espresso-soft)] px-6 py-24 md:px-12 md:py-32">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">02 / The experience</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">Made to be discovered, not rushed.</h2>
          <p className="max-w-xl self-end text-sm leading-7 text-[var(--muted)]">Approved menu, gallery and experience content will be integrated after the cafe's current information and visual assets have been verified.</p>
        </div>
      </section>

      <section id="visit" className="border-t border-[var(--line)] px-6 py-24 md:px-12 md:py-32">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">03 / Visit</p>
        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-serif text-5xl leading-tight md:text-7xl">Your next moment starts here.</h2>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">Opening hours, address, contact details and reservation availability will appear here once confirmed by the cafe.</p>
        </div>
        <p className="mt-12 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">Contact and reservation details pending business approval.</p>
      </section>

      <footer className="flex flex-col gap-3 border-t border-[var(--line)] px-6 py-8 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] md:flex-row md:justify-between md:px-12">
        <span>© {new Date().getFullYear()} The Rum's Cafe</span>
        <span>Website foundation · Phase 1</span>
      </footer>
    </main>
  );
}
