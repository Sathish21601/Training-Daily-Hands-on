import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import HomePage from './Pages/HomePage'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'
import HeaderComponent from './Components/HeaderComponent';
import ErrorPage from './Pages/ErrorPage.js';
import CheckoutPage from './Pages/CheckoutPage';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
    <Routes>
      <Route index  element={<HomePage/>}/>
      <Route path='category/:id'  element={<CategoryPage/>}/>
      <Route path='product/:id'  element={<ProductPage/>}/>
      <Route path='checkout'  element={<CheckoutPage/>}/>
      <Route path='404'  element={<ErrorPage/>}/>
      <Route path='*'  element={<Navigate to='404' replace></Navigate>}/>
      {/* <Route path='*'  element={<ErrorPage/>}/> */}
    </Routes>

    </div>
  );
}

export default App;
