
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import Topbar from './components/Topbar/Topbar';
import Buttonbar from './components/Buttonbar/Buttonbar';
function App() {
  return (
    <BrowserRouter>
    <Topbar></Topbar>
    <Header></Header>
    <Buttonbar></Buttonbar>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
