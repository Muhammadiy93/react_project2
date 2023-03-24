import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/home/Home'
import Chart from '../view/chart/Chart'
import Register from '../view/register/Register'
import Service from '../view/service/Service'
import Table from '../view/table/Table'
import Navbar from '../components/navbar/Navbar'
import addDevice from '../view/addDevice/Device'
import Login from '../view/login/login'


function Approuter() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addDevice' element={<addDevice/>}/>
            <Route path='/chart' element = {<Chart/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/service' element = {<Service/>}/>
            <Route path='/table' element = {<Table/>}/>
            <Route path='/login' element = {<Login/>}/>
        </Routes>
    </>
  )
}

export default Approuter