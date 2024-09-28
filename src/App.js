
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Models from './Pages/Models';
import Home from './Pages/Home';
import Vedio from './Pages/Vedio';
import About from './Pages/About';
import Ordercall from './Pages/Ordercall';
import Footer from './components/Footer/Footer';
import Product from './Pages/Product';
function App() {
  return (
    <div >
    
     <BrowserRouter> 
     <Navbar/>
     <Routes>
      <Route path='/'  element={<Home/>}/>  
      <Route path='/models'  element={<Models/>}/> 
      <Route path='/:modelId'  element={<Models/>}></Route> 
      <Route path='/vedio'  element={<Vedio/>}/>  
      <Route path='/about'  element={<About/>}/>     
      <Route path='/ordercall'  element={<Ordercall/>}/>  
      <Route path='product' element={<Product/>} >
      <Route path=':productId' element={<Product/>}/>
      </Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;