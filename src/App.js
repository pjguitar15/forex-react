import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
// components
import HomeNavbar from './components/HomeNavbar'
import BlogNavbar from './components/BlogNavbar'
import Footer from './components/Footer'
// pages
import Home from './pages/home/Home'
import BlogSlug from './pages/home/blog/BlogSlug'

function App() {
  return (
    <div>
      <Router>

        <Routes>
          {/* Home - Blog posts */}
          <Route path='/' element={<><HomeNavbar /><Home /></>} />
          <Route path='/blog/:id' element={<><BlogNavbar /><BlogSlug /></>} />

        </Routes>
      </Router>
      <Footer />
      {/* Blog Post Item */}
      {/* Economic Calendar */}
      {/* Compounding Calculator */}
      {/* Currency Converter */}
    </div>
  )
}

export default App
