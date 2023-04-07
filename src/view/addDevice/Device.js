import "./Device.css";
import React, { useState, useEffect } from 'react';
import Inf from "./inf";
import Baza from "../../doctor.json"

function Device() {
  const [baza, setBaza] = useState(Baza)

  const [posts, setPosts] = useState({
    id: Baza.length + 1,
    title: "",
    price: 0,
    firstName: "",
    lastName: "",
    login: "",
    parol: ""
  });

  const Reset = () => {
    setBaza([...Baza])
  }

  const changePerson = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };

  console.log(posts);

  const Submit = (e) => {
    e.preventDefault()
    Baza.push(posts)
    Reset()
    console.log(Baza);
  }


  return (
    <>
      <div className="container">
        <div className="xizmatlar-title pb-4 pt-4">
          <span className="titleTarix fs-3">Yangi Qo'shish</span>
        </div>
        <form className="addRegistr w-100 p-5" onSubmit={Submit}>
          <div className="addDoktor-haqida d-flex">
            <div className="addIsmi">
              <span className="addRegistrSpan">Xizmat haqida m'alumot kiriting</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3 addRegistrInput"
                placeholder="Ismi..."
                name="title"
                value={posts.title}
                onChange={changePerson}
              />
            </div>
            <div className="addFamiliya">
              <span className="addRegistrSpan">Xizmat narxlarini kiriting</span>
              <input type="number"
                className="form-control mt-4 mb-4 ms-3 addRegistrInput"
                placeholder="Familiyasi..."
                name="price"
                value={posts.price}
                onChange={changePerson}
              />
            </div>
          </div>
          <div className="addxizmat-haqida d-flex">
            <div className="addMalumot">
              <span className=" addRegistrSpan">Doktor Malumotlari</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3 addRegistrInput"
                placeholder="Xizmat nomi..."
                name="firstName"
                value={posts.firstName}
                onChange={changePerson}
              />
            </div>
            <div className="addNarx">
              <span className="addRegistrSpan"><br /></span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3 addRegistrInput"
                placeholder="Narxi..."
                name="lastName"
                value={posts.lastName}
                onChange={changePerson}
              />
            </div>
          </div>
          <div className="addxizmat-haqida d-flex">
            <div className="addMalumot">
              <span className="addRegistrSpan">Login va parol</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3 addRegistrInput"
                placeholder="Login..."
                name="login"
                value={posts.login}
                onChange={changePerson}
              />
            </div>
            <div className="addNarx">
              <span className="addRegistrSpan"><br /></span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3 addRegistrInput"
                placeholder="Parol..."
                name="parol"
                value={posts.parol}
                onChange={changePerson}
              />
            </div>
          </div>
          <div className="add-btn d-flex justify-content-center ">
            <button
              to="/"
              type="submit"
              className=" btn button"
            >Add devays</button>
          </div>
        </form>
  

      <div class="row ">


        {
          baza.map((item) => {
            return (
              <div className="my-4 col-md-6">
                <Inf
                  key={item.id}
                  title={item.title}
                  fristname={item.fristname}
                  lastname={item.lastName}
                  login={item.login}
                  parol={item.parol}
                  price={item.price} />
              </div>
            )
          })
        }
      </div>


      </div>
    </>
  );
}

export default Device;
