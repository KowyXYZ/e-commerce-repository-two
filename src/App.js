
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ProductCard, { productCardLoader } from './Components/Products/ProductCard';
import CartPage from './Pages/CartPage';
import SearchProducts from './Components/Products/SearchProducts';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/product/:id' element={<ProductCard/>} loader={productCardLoader}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/products/searching' element={<SearchProducts/>}/>
      </Route>
    )
    
)


function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
