import logo from './logo.svg';
import './App.css';
import CoverPage from './pages/CoverPage';
import NavBar from './layout/NavBar';
import NewTask from './pages/NewTask';
import NewT from './layout/NewT';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MyTask from './pages/MyTask';
import EditTask from './pages/EditTask';
import Registration from './pages/Registration';
import Login from './pages/Login';

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
        <Route path='/EditTask/:id' element={<EditTask/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        
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
