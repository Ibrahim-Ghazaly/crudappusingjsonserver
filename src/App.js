import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import Home from './pages/home';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-2 sidebar'><SideBar/></div>
      <div className='col-10'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>

        </Routes>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
