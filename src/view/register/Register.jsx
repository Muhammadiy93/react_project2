import './Register.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function Register() {
  return (
   <>
   <Navbar/>
    <div className='r_wrapper'>
      <div className="container">
          <h2 className='top_word1'>Psixolog</h2>
          <div className="tablet_form bg-light">
            <h3 className='tab_top_txt'>Ma'lumotlarni kiriting</h3><br />
            <input className='tab_inp_0' type="text" placeholder='Bemor ismi...' />
            <input className='tab_inp_1' type="text" placeholder='Bemor familiyasi...' /><br />
            <input className='tab_inp_2' type="text" placeholder="Bemor tug'ilgan yili..." /><br />
            <h3 className='tab_txt1'>To'liq manzil</h3><br />
            <input className='tab_inp_3' type="text" placeholder="Bemor manzili..." />
            <h1 className='tab_txt2'>Mu'olaja qiymati : 255 000 so'm</h1>
            <button className='tab_btn'>Bajarildi</button>
          </div>
              <button className='btm_btn'>Jadvalni ko'rish</button>
              <h6 className='btm_txt0'>This web site MEDICAL.NET Copyright 2020-2021</h6>
      </div>
    </div>
   </>
  )
}

export default Register