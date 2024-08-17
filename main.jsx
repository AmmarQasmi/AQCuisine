import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Search from './Search/Search'
import Recipes from './Recipe_list/Recipes'
import './index.css';
import Signup from './Signup/Signup'
import Login from './Signup/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='Home' element={<Home />}></Route>
      <Route path='Search' element={<Search />}></Route>
      <Route path='recipe-list' element={<Recipes />}></Route>
      <Route path='Login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)