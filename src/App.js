import './App.css';
import Navigation from './components/navig/nav'
import Hero from './components/banner/banner'
import Product from './components/products/product'
import Review from './components/review/review';
import Start from './components/started/start'
import Price from './components/price/price'
import Service from './components/service/serv'
import Team from './components/team/team'
import Faqs from './components/question/ques'
import Trust from './components/company/com'
import Contact from './components/footer/footer'


function App() {
    return (
        <div className="App">
            <Navigation /> <Hero /> <Product /> <Review /> <Start /> <Price /> <Service /> <Team /> <Faqs /> <Trust /> <Start /> <Contact />
        </div>
    )
}

export default App;