import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestLayout from './src/Layout/GuestLayout';
import Home from './src/Pages/Home'

export default function App() {
    return (
        <>
        <BrowserRouter>
        <GuestLayout />
        <Routes>
            <Route path={'/'} element={<Home />}></Route>
        </Routes>
        </BrowserRouter>       
        </>
    )
}