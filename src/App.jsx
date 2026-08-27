import { useEffect } from 'react'
import Header from './components/Header.jsx'
import CTAButtons from './components/CTAButtons.jsx'
import Footer from './components/Footer.jsx'
import AboutSection from './components/AboutSection.jsx'

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-text focus:text-bg focus:rounded-md focus:outline-2 focus:outline-accent">
        Skip to content
      </a>
      <main id="main-content" className="w-full max-w-[700px] flex flex-col items-center px-5 py-5">
        <div className="text-center max-w-[600px] mx-auto w-full animate-fade-up">
          <Header />
          <p className="mb-6 leading-[1.6]">
            Building efficient, lightweight software for the modern web.
          </p>
          <CTAButtons />
        </div>

        <div className="w-full max-w-[600px] mx-auto mt-10 animate-fade-up [animation-delay:120ms]">
          <AboutSection variant={1} title="Parent org behind the lab." />
        </div>
      </main>
      <Footer />
    </>
  )
}
