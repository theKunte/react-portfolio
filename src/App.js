import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/components/Home';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </>
  )
}

export default App;
