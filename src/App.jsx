
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/navbar/Navbar'
import Portoflio from './Components/portofileo/Portoflio'
import Layout from './Components/layout/Layout'

function App() {
 
const router = createBrowserRouter([

{path:"",element:<Layout/>,children:[
{path:"",element:<Home/>},
{path:"about",element:<About/>},
{path:"portoflio",element:<Portoflio/>},
{path:"contact",element:<Contact/>},
]}


])
  return (
    <>
   
   <RouterProvider router={router}/>
    </>
  )
}

export default App
