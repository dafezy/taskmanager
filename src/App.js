import logo from './logo.svg';
import './App.css';
import CoverPage from './pages/CoverPage';
import NavBar from './layout/NavBar';
import NewTask from './pages/NewTask';
import NewT from './layout/NewT';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MyTask from './pages/MyTask';
import EditTask from './pages/EditTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/MyTask' element={<MyTask/>}/>
        <Route path='/NewTask' element={<NewTask/>}/>
        <Route path='/CoverPage' element={<CoverPage/>}/>
        <Route index element={ <CoverPage/>}/>
        <Route path='/EditTask' element={<EditTask/>}/>
        
{/* 
      <CoverPage/>
      <NewTask/>
      <NewT/> */}
      </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
      <NavBar cart={cart}/>
      <Routes>
        <Route  index element= {<Home cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>}/>
        <Route path='/SingleProduct/:id'  element={<SingleProduct />}/>

        <Route path='/Cart' element={<Cart cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>}/>
      
      </Routes>
      </BrowserRouter> */}
     
    </div>
  );
}

export default App;
