import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Portfolio from './assets/components/Portfolio'
import Dashboard from './assets/components/Dashboard'

function App() {
  return (
    // TODO: fix Route. At the moment the page isnt loading again if you chance it to another page
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
