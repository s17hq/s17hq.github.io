export default function CTAButtons() {
  return (
    <div className="flex justify-center gap-3 flex-wrap max-[580px]:flex-col max-[580px]:items-center">
      <a
        className="inline-flex items-center justify-center gap-2 py-[0.75rem] px-[1.3rem] rounded-md text-[0.95rem] bg-text text-bg hover:bg-accent active:bg-accent-strong active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition duration-[250ms] w-full max-w-[320px] sm:w-[160px] sm:max-w-none"
        href="https://github.com/s17hq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
      </a>

      <a
        className="inline-flex items-center justify-center gap-2 py-[0.75rem] px-[1.3rem] rounded-md text-[0.95rem] bg-transparent border border-text hover:border-accent hover:text-accent active:bg-accent/10 active:text-accent-strong active:border-accent-strong active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition duration-[250ms] w-full max-w-[320px] sm:w-[160px] sm:max-w-none"
        href="https://s17labs.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-flask" aria-hidden="true"></i> s17 Labs
      </a>
    </div>
  )
}
