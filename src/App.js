import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Rewies from "./components/Rewies";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";


export default function App(){
  return(

    <Layout>
      <nav>
        {/* <NavLink to='/' end>Home</NavLink> */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/about" element={<About/>}>
             <Route path="rewies" element={<Rewies/>}/>
             <Route path="mission" element={<Mission/>}/>
        </Route>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails />}>
          <Route path="gallery" element={<Gallery/>}/>
        </Route>
        
      </Routes>
    </Layout>
  )
}