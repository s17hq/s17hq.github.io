const copy = {
  p1: "Syntax17 is the parent organization behind s17 Labs. We build efficient, lightweight software for the modern web — focused on performance, minimal dependencies, and clean interfaces.",
  p2: "s17 Labs is our experimental wing where tools, apps, and utilities are prototyped and iterated in the open. The best ideas graduate into stable, open-source releases. No bloat — just software that stays out of your way.",
}

function Variant1({ title }) {
  return (
    <section className="w-full pt-8 border-t border-rule text-center" aria-labelledby="about-heading">
      <p className="font-display text-[0.68rem] tracking-[0.2em] uppercase text-muted mb-3">About</p>
      <h2 id="about-heading" className="font-display text-[1.4rem] leading-tight mb-4">{title}</h2>
      <div className="space-y-3 text-left text-[0.95rem] leading-[1.7] text-muted">
        <p>{copy.p1}</p>
        <p>{copy.p2}</p>
      </div>
      <a
        href="https://s17labs.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-1.5 mt-5 text-[0.9rem] text-accent hover:text-accent-strong active:text-accent-strong active:scale-[0.97] hover:underline underline-offset-4 decoration-accent/30 transition duration-200"
      >
        Explore s17 Labs <i className="fa-solid fa-arrow-right text-[0.7rem] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"></i>
      </a>
    </section>
  )
}

function Variant2() {
  return (
    <section className="w-full pt-8 border-t border-rule">
      <div className="border-l-2 border-accent pl-5 py-1 text-left">
        <p className="font-display text-[0.68rem] tracking-[0.2em] uppercase text-muted mb-2">About Syntax17</p>
        <h2 className="font-display text-[1.35rem] leading-tight mb-3">The parent org behind the lab.</h2>
        <div className="space-y-3 text-[0.93rem] leading-[1.7] text-muted">
          <p>{copy.p1}</p>
          <p>{copy.p2}</p>
        </div>
        <a
          href="https://s17labs.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-[0.9rem] text-accent hover:text-accent-strong active:text-accent-strong active:scale-[0.97] hover:underline underline-offset-4 decoration-accent/30 transition duration-200"
        >
          Explore s17 Labs <i className="fa-solid fa-arrow-right text-[0.7rem]" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  )
}

function Variant3() {
  return (
    <section className="w-full pt-8 border-t border-rule text-center">
      <p className="font-display text-[0.68rem] tracking-[0.2em] uppercase text-muted mb-3">About</p>
      <h2 className="font-display text-[1.4rem] leading-tight mb-3">Two parts. One direction.</h2>
      <p className="text-[0.93rem] leading-[1.7] text-muted mb-6">
        A small parent org that sets the bar, and a lab that ships the experiments.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        <div className="rounded-xl border border-rule p-5">
          <span className="inline-block size-7 bg-accent mb-3 shrink-0" aria-hidden="true"></span>
          <h3 className="font-display text-[1rem] mb-2">Syntax17</h3>
          <p className="text-[0.88rem] leading-[1.65] text-muted">
            Parent organization. Sets direction and standards for lightweight, open-source software built for the modern web.
          </p>
        </div>
        <div className="rounded-xl border border-rule p-5">
          <span className="inline-flex size-7 border-2 border-accent items-center justify-center mb-3 shrink-0" aria-hidden="true">
            <i className="fa-solid fa-flask text-accent text-[0.7rem]" aria-hidden="true"></i>
          </span>
          <h3 className="font-display text-[1rem] mb-2">s17 Labs</h3>
          <p className="text-[0.88rem] leading-[1.65] text-muted">
            Experimental wing. Tools, apps, and utilities are prototyped, iterated in the open, and released when genuinely useful.
          </p>
        </div>
      </div>
      <a
        href="https://s17labs.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-6 text-[0.9rem] text-accent hover:text-accent-strong active:text-accent-strong active:scale-[0.97] hover:underline underline-offset-4 decoration-accent/30 transition duration-200"
      >
        Visit s17 Labs <i className="fa-solid fa-arrow-right text-[0.7rem]" aria-hidden="true"></i>
      </a>
    </section>
  )
}

function Variant4() {
  return (
    <section className="w-full pt-8 border-t border-rule text-center">
      <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rule text-[0.68rem] tracking-[0.16em] uppercase text-muted">
        Parent • Lab
      </span>
      <h2 className="font-display text-[1.4rem] leading-tight mt-4 mb-4">Built lean. Shipped from the lab.</h2>
      <div className="rounded-xl border border-rule bg-white/50 p-6 text-left">
        <div className="space-y-3 text-[0.92rem] leading-[1.7] text-muted">
          <p>{copy.p1}</p>
          <p>{copy.p2}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <span className="px-2.5 py-1 rounded-full border border-rule text-[0.7rem] tracking-wide text-muted">Open Source</span>
          <span className="px-2.5 py-1 rounded-full border border-rule text-[0.7rem] tracking-wide text-muted">Minimal</span>
          <span className="px-2.5 py-1 rounded-full border border-rule text-[0.7rem] tracking-wide text-muted">Fast</span>
        </div>
      </div>
      <a
        href="https://s17labs.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-5 text-[0.9rem] text-accent hover:text-accent-strong active:text-accent-strong active:scale-[0.97] hover:underline underline-offset-4 decoration-accent/30 transition duration-200"
      >
        Explore s17 Labs <i className="fa-solid fa-arrow-right text-[0.7rem]" aria-hidden="true"></i>
      </a>
    </section>
  )
}

export default function AboutSection({ variant, title }) {
  switch (variant) {
    case 2:
      return <Variant2 />
    case 3:
      return <Variant3 />
    case 4:
      return <Variant4 />
    case 1:
    default:
      return <Variant1 title={title} />
  }
}

export const VARIANT_META = [
  { id: 1, label: 'Minimal', desc: 'Centered text' },
  { id: 2, label: 'Accent line', desc: 'Editorial' },
  { id: 3, label: 'Split cards', desc: 'Parent / Lab' },
  { id: 4, label: 'Pill + block', desc: 'Contained' },
]
