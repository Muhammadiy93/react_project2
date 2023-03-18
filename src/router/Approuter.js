import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/home/Home'
import Chart from '../view/chart/Chart'
import Register from '../view/register/Register'
import Service from '../view/service/Service'
import Table from '../view/table/Table'
import Navbar from '../components/navbar/Navbar'


function Approuter() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/chart' element = {<Chart/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/service' element = {<Service/>}/>
            <Route path='/table' element = {<Table/>}/>
        </Routes>
    </>
  )
}

export default Approuter