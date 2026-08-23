export default function Header() {
  return (
    <header className="text-center my-8 font-display text-[clamp(2.5rem,10vw,4.5rem)]">
      <div className="inline-flex items-center gap-[0.2em]">
        <span className="inline-block size-[0.75em] bg-accent -translate-y-[0.1em]" aria-hidden="true"></span>
        Syntax<span className="text-accent">17</span>
      </div>
    </header>
  )
}
