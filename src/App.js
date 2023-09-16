
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ProductCard, { productCardLoader } from './Components/Products/ProductCard';
import CartPage from './Pages/CartPage';
import SearchProducts from './Components/Products/SearchProducts';
import Register from './Components/Auth/Register';
import AuthPage from './Pages/AuthPage';
import UserPage from './Pages/UserPage';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/product/:id' element={<ProductCard/>} loader={productCardLoader}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/products/searching' element={<SearchProducts/>}/>
        <Route path='/user/profile' element={<UserPage/>}/>
        <Route path='/user/login' element={<AuthPage/>}/>
        <Route path='/user/register' element={<Register/>}/>
      </Route>
    )
    
)


function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
