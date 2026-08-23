export default function CTAButtons() {
  return (
    <div className="flex justify-center gap-4 flex-wrap max-[580px]:flex-col">
      <a
        className="inline-flex items-center justify-center gap-2 py-[0.8rem] px-[1.4rem] rounded-md text-base bg-text text-bg hover:bg-accent active:bg-accent-strong active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition duration-[250ms]"
        href="https://github.com/s17hq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i> GitHub
      </a>

      <a
        className="inline-flex items-center justify-center gap-2 py-[0.8rem] px-[1.4rem] rounded-md text-base bg-transparent border border-text hover:border-accent hover:text-accent active:bg-accent/10 active:text-accent-strong active:border-accent-strong active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition duration-[250ms]"
        href="https://s17labs.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-flask"></i> s17 Labs
      </a>
    </div>
  )
}
