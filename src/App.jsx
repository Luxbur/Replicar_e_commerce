import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './Component/NavComponent';
import ProductList from './Component/ProductosComponent';
import BodyComponent from './Component/BodyComponent';

function App() {
  return (
    <Router>
      <NavComponent/>
      <Routes>
        <Route path="/" element={<BodyComponent />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/laptops" element={<ProductList />} />
      </Routes>
    </Router>
  )
}


export default App
