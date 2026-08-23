import Header from './components/Header.jsx'
import CTAButtons from './components/CTAButtons.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <main className="flex-1 w-full max-w-[700px] flex items-center px-5 py-5 animate-fade-up">
        <div className="text-center max-w-[600px] mx-auto">
          <Header />
          <p className="mb-6 leading-[1.6]">
            Building efficient, lightweight software for the modern web.
          </p>
          <CTAButtons />
        </div>
      </main>
      <Footer />
    </>
  )
}
