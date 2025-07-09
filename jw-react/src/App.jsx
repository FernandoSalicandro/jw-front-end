import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestLayout from './Layout/GuestLayout';
import HomePage from './Pages/Homepage'
import Prodotti from './Pages/Prodotti'

function App() {


  return (
    <>
      <BrowserRouter>
        <GuestLayout />
        <Routes>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/prodotti'} element={<Prodotti />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
