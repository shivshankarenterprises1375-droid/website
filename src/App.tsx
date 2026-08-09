import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import InsightsPage from './pages/InsightsPage'
import ArticlePage from './pages/ArticlePage'
import FaqPage from './pages/FaqPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<ArticlePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
