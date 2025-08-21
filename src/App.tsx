import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.tsx'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import Header from "./components/global/Header.tsx"
import Footer from './components/global/Footer.tsx'


function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
