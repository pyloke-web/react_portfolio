import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/home/Home'
import CaseStudy from './pages/case-study/CaseStudy'
import { caseStudies } from './data'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
            {/* Old URLs, kept so existing shared links still work */}
            {caseStudies.map(({ slug }, i) => (
              <Route key={slug} path={`/project${i + 1}`} element={<Navigate to={`/projects/${slug}`} replace />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
