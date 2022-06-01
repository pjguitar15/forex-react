import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
// context
import { ContextProvider } from './context/ContextProvider';
import { EconomicCalendarProvider } from './context/EconomicCalendarProvider'
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
import CurrencyCoverter from './pages/currency-converter/CurrencyCoverter';
import ErrorPage from './pages/ErrorPage';
import LiveMarket from './pages/economic calendar/LiveMarket';

function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
          <EconomicCalendarProvider>
            <Routes>
              {/* Home - Blog posts */}
              <Route path='/' element={<><HomeNavbar /><Home /></>} />
              {/* <Route path='/add' element={<AddItemsToFirebase />} /> */}
              <Route path='/blog/:id' element={<><BlogNavbar /><BlogSlug /></>} />

              {/* Category Slug */}
              <Route path='/blog/categories/:id' element={<><BlogNavbar /><CategoryItems /></>} />

              {/* Economic Calendar */}
              <Route path='/economic-calendar' element={<><HomeNavbar /><EconomicCalendar /></>} />
              <Route path='/live-market' element={<><HomeNavbar /><LiveMarket /></>} />

              {/* Forex Compounding Calculator */}
              <Route path='/compounding-calculator' element={<><HomeNavbar /><ForexCompoundingCalculator /></>} />

              {/* Forex Compounding Calculator */}
              <Route path='/currency-converter' element={<><BlogNavbar /><CurrencyCoverter /></>} />


              {/* Error page */}
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </EconomicCalendarProvider>
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
