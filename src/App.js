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
import CategoryItems from './pages/home/blog/CategoryPage/CategoryItems';
import EconomicCalendar from './pages/economic calendar/EconomicCalendar';
import ForexCompoundingCalculator from './pages/forex-compounding-calculator/ForexCompoundingCalculator';
import CurrencyCoverter from './pages/currency-converter/CurrencyCoverter';
import ErrorPage from './pages/ErrorPage';
import LiveMarket from './pages/economic calendar/LiveMarket';
import About from './pages/about/About';
import RealTimeChart from './pages/real-time-chart/RealTimeChart';
import Screener from './pages/screener/Screener'
import CryptocurrencyMarket from './pages/cryptocurrency-market/CryptocurrencyMarket';
import FundamentalData from './pages/fundamental-data/FundamentalData';
import MarketData from './pages/market-data/MarketData';
import StockMarket from './pages/stock-market/StockMarket';
import SymbolOverview from './pages/symbol-overview/SymbolOverview';
import ForexCrossRates from './pages/forex-cross-rates/ForexCrossRates';
import ForexHeatMap from './pages/forex-heat-map/ForexHeatMap';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/login/Register';
// Protected pages
import Portfolios from './pages/home/protected-page/Portfolios';
import PersonalDetails from './pages/home/protected-page/personal-details/PersonalDetails';
import ShowInvoice from './pages/home/protected-page/ShowInvoice';
import CreditNote from './pages/home/protected-page/credit-note/CreditNote';
import Partnership from './pages/partnership/Partnership';
import FicaDocuments from './pages/home/protected-page/FICA/FicaDocuments';
import Payouts from './pages/home/protected-page/payouts/Payouts';
import ElectronicWallet from './pages/home/protected-page/ElectronicWallet';
import VerifyEmail from './pages/home/protected-page/VerifyEmail';
import TradingAcademy from './pages/trading-academy/TradingAcademy';

function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
          <EconomicCalendarProvider>
            <Routes>
              {/* Home - Blog posts */}
              <Route path='/' element={<><HomeNavbar /><Home /><Footer /></>} />
              {/* About page */}
              <Route path='/about' element={<><HomeNavbar /><About /></>} />
              {/* <Route path='/add' element={<AddItemsToFirebase />} /> */}
              <Route path='/blog/:id' element={<><BlogNavbar /><BlogSlug /></>} />

              {/* Category Slug */}
              <Route path='/blog/categories/:id' element={<><BlogNavbar /><CategoryItems /></>} />

              {/* Economic Calendar */}
              <Route path='/economic-calendar' element={<><HomeNavbar /><EconomicCalendar /></>} />
              <Route path='/live-market' element={<><HomeNavbar /><LiveMarket /></>} />
              <Route path='/real-time-chart' element={<><HomeNavbar /><RealTimeChart /></>} />
              <Route path='/screener' element={<><HomeNavbar /><Screener /></>} />
              <Route path='/cryptocurrency-market' element={<><HomeNavbar /><CryptocurrencyMarket /></>} />
              <Route path='/fundamental-data' element={<><HomeNavbar /><FundamentalData /></>} />
              <Route path='/market-data' element={<><HomeNavbar /><MarketData /></>} />
              <Route path='/stock-market' element={<><HomeNavbar /><StockMarket /></>} />
              <Route path='/symbol-overview' element={<><HomeNavbar /><SymbolOverview /></>} />
              <Route path='/forex-cross-rates' element={<><HomeNavbar /><ForexCrossRates /></>} />
              <Route path='/forex-heat-map' element={<><HomeNavbar /><ForexHeatMap /></>} />


              {/* Forex Compounding Calculator */}
              <Route path='/compounding-calculator' element={<><HomeNavbar /><ForexCompoundingCalculator /></>} />

              {/* Forex Compounding Calculator */}
              <Route path='/currency-converter' element={<><BlogNavbar /><CurrencyCoverter /></>} />

              <Route path='/login' element={<><BlogNavbar /><LoginPage /></>} />
              <Route path='/register' element={<><BlogNavbar /><Register /></>} />
              <Route path='/investment-portfolios' element={<><BlogNavbar /><Portfolios /></>} />
              <Route path='/fica-documents' element={<><BlogNavbar /><FicaDocuments /></>} />
              <Route path='/personal-details' element={<><BlogNavbar /><PersonalDetails /></>} />
              <Route path='/show-invoice' element={<><BlogNavbar /><ShowInvoice /></>} />
              <Route path='/credit-note' element={<><BlogNavbar /><CreditNote /></>} />
              <Route path='/partnership' element={<><HomeNavbar /><Partnership /></>} />
              <Route path='/payouts' element={<><BlogNavbar /><Payouts /></>} />
              <Route path='/electronic-wallet' element={<><BlogNavbar /><ElectronicWallet /></>} />
              <Route path='/verify-email' element={<><BlogNavbar /><VerifyEmail /></>} />

              <Route path='/trading-academy' element={<><HomeNavbar /><TradingAcademy /></>} />
              {/* Error page */}
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </EconomicCalendarProvider>
        </ContextProvider>
      </Router>
    </div>
  )
}

export default App
