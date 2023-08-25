
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Route>
    )
    
)


function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
