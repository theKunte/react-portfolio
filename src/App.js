import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Portfolio from './assets/components/Portfolio';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />

      </Route>
    </Routes>
  </>
  )
}

export default App;
