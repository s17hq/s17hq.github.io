export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full max-w-[600px] px-5 py-6 border-t border-rule flex flex-col items-center gap-3 text-[0.85rem] text-muted text-center animate-fade-up [animation-delay:240ms]">
      <div className="flex items-center gap-6">
        <a
          className="hover:text-accent active:text-accent-strong active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex items-center gap-1.5 transition duration-200"
          href="https://x.com/s17hq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter" aria-hidden="true"></i> X/Twitter
        </a>
        <a
          className="hover:text-accent active:text-accent-strong active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex items-center gap-1.5 transition duration-200"
          href="https://discord.gg/dDGbjKTVH2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-discord" aria-hidden="true"></i> Discord
        </a>
      </div>
      <span>© {year} Syntax17</span>
    </footer>
  )
}
