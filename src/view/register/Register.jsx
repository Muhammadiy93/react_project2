import './Register.css'
import React from 'react'

function Register() {
  return (
    <div className='wrapper'>
      <div className="container">
          <h2 className='mt-5 mb-4'>Psixolog</h2>
              <div className="tabletForm1 bg-light mb-3 py-5">
                <div className="container">
                  <h5 className='xat'>Ma'lumotlarni kiriting</h5>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                      <input type="text" placeholder='Bemor ismi...' />
                      <br />
                      <input className='qwe' type="text" placeholder="Bemor tug'ilgan yili..." />
                    </div>
                    <div className="col-md-5">
                      <input type="text" placeholder='Bemor familiyasi' />
                    </div>
                  </div>
                  <h5 className='rXat1'>To'liq manzil</h5>
                  <br />
                    <input className='rInp mb-5 mt-2' type="text" placeholder='Bemor manzili...' />
                    <h4 className='rXat2 mb-5'>Mu'olaja qiymati : 255 000 so'm</h4>
                    <button className='rBtn mb-4 px-5 py-1'>Bajarildi</button>
                </div>
              </div>
              <button className='rBtn1 mb-5 mt-4 px-5 py-1'>Jadvalni ko'rish</button>
              <p className='footWord1'>This website MEDICAL.NET Copyright 2020-2021</p>
      </div>
    </div>
  )
}

export default Register