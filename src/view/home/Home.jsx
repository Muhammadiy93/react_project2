import './Home.css'
import React from 'react'
import Rasim1 from './medical.png'
import Button from '../../components/home_button'

function Home(props) {
  let arr = [
    {
      id: 1,
      title: "Masaj"
    },
    {
      id: 2,
      title: "Psixolog"
    },
    {
      id: 3,
      title: "Pediator"
    },
    {
      id: 4,
      title: "Rengen"
    },
    {
      id: 5,
      title: "UZI"
    },
    {
      id: 6,
      title: "EKG"
    },
    {
      id: 7,
      title: "Genikolog"
    },
    {
      id: 8,
      title: "Lor"
    },
  ]
  return (
    <div>
      <div>
        <img src={Rasim1} alt="" className='home_img' />
        <h4 className='home_h4'>MEDICAL.NET</h4>
      </div>
      <div>
        <h3 className='home_h5'>Xizmat turlari</h3>
        <div class="container justify-content-center ">
          <div class="row gy-5 ">
              {
                arr.map((elem, index) => {
                  return(
                    <div className="col-md-6" key={index}>
                      <Button name={elem.title}/>
                    </div>
                  )
                })
              }
            
          </div>
        </div>
      </div>
      <h2 className='home_h2'>This web site MEDICAL.NET Copyright 2020-2021</h2>
    </div>
  )
}

export default Home