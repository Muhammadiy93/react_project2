import React, { useState, useEffect } from "react";
import "./Device.css";

function Inf(props) {
    return (
        <>
        <div class="row">
  <div class="col-sm-6 mb-3 ">
    <div class="card serviceCard ">
      <div class="card-body ms-4">
        <h5 class="card-title serCardTitile">{props.title}</h5>
        <p class="card-text serCardText">Narxi :{props.price}  so'm</p>
        <p class="card-text serCardText">Doktor: {props.firstName}, {props.lastname} </p>
        <p class="card-text serCardText">Login : {props.login}</p>
        <p class="card-text serCardText">Parol : {props.parol}</p>
        <div className="d-flex justify-content-end">
        <a href="#" class="btn btn-primary serCardBut ">Tahrirlash</a>
        <a href="#" class="btn btn-primary serCardButt mx-3">O'chirish</a>
        </div>
      </div>
    </div>
  </div>
 
</div>
        </>
    )
}
export default Inf




// <div className="Xizmatlar mt-5">
// <div className="container">
//     <div className="xizmatlar-title pt-5 mb-5">
//         <span className="fs-3 fw-italic titleTarix">{props.sericeTitile}</span>
//     </div>
//     <div className="row insideDiv g-3">
       
//             <div className="col-md-6" >
//                 <div className="xizmatlar-card p-2">
//                     <div className="card-item p-2 ms-4">
//                         <span className="pb-4 pt-4 text-capitalize xizmatlarCardSpan">{props.title}</span><br />
//                         <span className="narx card-item-size xizmatlarCardSpan">Narxi :{props.price}  so'm</span><br />
//                         <span className="doctor card-item-size text-capitalize  xizmatlarCardSpan">Doktor: {props.firstName}, {props.lastname} </span><br />
//                         <span className="login card-item-size  xizmatlarCardSpan">Login : {props.login}</span><br />
//                         <span className="parol card-item-size xizmatlarCardSpan">Parol : {props.parol}</span>
//                     </div>
//                     <div className="xizmatlar-btn m-0 p-0 d-flex justify-content-end me-5">
//                         <div className="btn rounded-pill p-2 w-25 xizmatlar-btn1">Tahrirlash</div>
//                         <div className="btn rounded-pill p-2 w-25 xizmatlar-btn2 ms-3">O'chirish</div>
//                     </div>
//                 </div>
//             </div>
  
//     </div>
// </div>
// </div>