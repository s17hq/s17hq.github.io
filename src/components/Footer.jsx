export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full max-w-[700px] px-6 py-4 border-t border-rule flex justify-between flex-wrap gap-3 text-[0.85rem] text-muted max-[580px]:justify-center max-[580px]:text-center sticky bottom-0 bg-bg z-10">
      <span>© {year} Syntax17</span>

      <div className="flex gap-3.5">
        <a
          className="hover:text-accent active:text-accent-strong active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex items-center gap-1.5 transition duration-200"
          href="https://x.com/s17hq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i> X/Twitter
        </a>
        <a
          className="hover:text-accent active:text-accent-strong active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex items-center gap-1.5 transition duration-200"
          href="https://discord.gg/dDGbjKTVH2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-discord"></i> Discord
        </a>
      </div>
    </footer>
  )
}
