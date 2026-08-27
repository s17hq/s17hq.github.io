export default function Header() {
  return (
    <header className="text-center my-8 font-display text-[clamp(3rem,11vw,4.5rem)] max-[380px]:text-[clamp(2.75rem,11vw,4.5rem)]">
      <div className="inline-flex items-center justify-center gap-[0.2em] max-w-full">
        <span className="inline-block size-[0.75em] bg-accent -translate-y-[0.1em] shrink-0" aria-hidden="true"></span>
        <span className="whitespace-nowrap">Syntax<span className="text-accent">17</span></span>
      </div>
    </header>
  )
}
