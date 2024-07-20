
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gradient-to-br 
      from-cyan-100 via-white to-violet-200
      min-h-screen w-full'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
