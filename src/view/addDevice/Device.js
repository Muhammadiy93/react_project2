import "./Device.css";

function addDevice() {
  return (
    <>
      <div className="container">
        <div className="xizmatlar-title pb-4 pt-4">
          <span className="titleTarix fs-3">Yangi Qo'shish</span>
        </div>
        <form className="addRegistr w-100 p-5">
          <div className="addDoktor-haqida d-flex">
            <div className="addIsmi">
              <span className="">Xizmat haqida m'alumot kiriting</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3"
                placeholder="Ismi..."
                name="fullname_doc"

              />
            </div>
            <div className="addFamiliya">
              <span>Xizmat narxlarini kiriting</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3"
                placeholder="Familiyasi..."
                name="doctor_sourname"

              />
            </div>
          </div>
          <div className="addxizmat-haqida d-flex">
            <div className="addMalumot">
              <span className="">Doktor Malumotlari</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3"
                placeholder="Xizmat nomi..."
                name="service_type"

              />
            </div>
            <div className="addNarx">
              <span className=""><br /></span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3"
                placeholder="Narxi..."
                name="service_price"

              />
            </div>
          </div>
          <div className="addxizmat-haqida d-flex">
            <div className="addMalumot">
              <span className="">Login va parol</span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3"
                placeholder="Login..."
                name="doctor_login"

              />
            </div>
            <div className="addNarx">
              <span><br /></span>
              <input type="text"
                className="form-control mt-4 mb-4 ms-3"
                placeholder="Parol..."
                name="doctor_parol"

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
      </div>
      <div className="Xizmatlar mt-5">
        <div className="container">
          <div className="xizmatlar-title pt-5 mb-5">
            <span className="fs-3 fw-italic titleTarix">Mavjud xizmatlarni taxrirlash yoki ochirib tashlash</span>
          </div>
          <div className="row g-3">

            <div className="col-md-6" >
              <div className="xizmatlar-card p-2">
                <div className="card-item p-2 ms-4">
                  <span className="pb-4 pt-4 text-capitalize">Psixolog</span><br />
                  <span className="narx card-item-size">Narxi :  so'm</span><br />
                  <span className="doctor card-item-size text-capitalize">Doktor:   </span><br />
                  <span className="login card-item-size">Login : </span><br />
                  <span className="parol card-item-size">Parol : </span>
                </div>
                <div className="xizmatlar-btn m-0 p-0 d-flex justify-content-end me-5">
                  <div className="btn rounded-pill p-2 w-25 xizmatlar-btn1">Tahrirlash</div>
                  <div className="btn rounded-pill p-2 w-25 xizmatlar-btn2 ms-3">O'chirish</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default addDevice;
