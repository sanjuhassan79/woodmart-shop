
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  
  
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Appitems from './components/appsitem/Appitems';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Navigate from './components/navigate/Navigate';
import Productivity from './components/Productivity/Productivity';
import Founders from './components/Founders/Founders';

function App() {
  return (
    <BrowserRouter>
    
    <Header></Header>
    <Banner></Banner>
    
    <Appitems></Appitems>
    
    <Features></Features>
    <Pricing></Pricing>
    <Navigate></Navigate>
    <Productivity></Productivity>
    <Founders></Founders>
    <Footer></Footer>
    
  </BrowserRouter>
  );
}

export default App;
