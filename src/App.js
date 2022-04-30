import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Shared/Login/Login';
import SignUp from './Pages/Shared/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Inventory from './Pages/Inventory/Inventory';
import AboutUs from './Pages/About-us/AboutUs';
import Brands from './Pages/Brands/Brands';
import Inventories from './Pages/Inventory/Inventories';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/brands' element={<Brands></Brands>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
