import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
// context
import { ContextProvider } from './context/ContextProvider';
// components
import HomeNavbar from './components/HomeNavbar'
import BlogNavbar from './components/BlogNavbar'
import Footer from './components/Footer'
// pages
import Home from './pages/home/Home'
import BlogSlug from './pages/home/blog/BlogSlug'
import AddItemsToFirebase from './AddItemsToFirebase';
import CategoryItems from './pages/home/blog/CategoryPage/CategoryItems';
import EconomicCalendar from './pages/economic calendar/EconomicCalendar';
import ForexCompoundingCalculator from './pages/forex-compounding-calculator/ForexCompoundingCalculator';

function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
          <Routes>
            {/* Home - Blog posts */}
            <Route path='/' element={<><HomeNavbar /><Home /></>} />
            <Route path='/add' element={<AddItemsToFirebase />} />
            <Route path='/blog/:id' element={<><BlogNavbar /><BlogSlug /></>} />

            {/* Category Slug */}
            <Route path='/blog/categories/:id' element={<><BlogNavbar /><CategoryItems /></>} />

            {/* Economic Calendar */}
            <Route path='/economic-calendar' element={<><HomeNavbar /><EconomicCalendar /></>} />

            {/* Forex Compounding Calculator */}
            <Route path='/compounding-calculator' element={<><HomeNavbar /><ForexCompoundingCalculator /></>} />

          </Routes>
        </ContextProvider>
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
