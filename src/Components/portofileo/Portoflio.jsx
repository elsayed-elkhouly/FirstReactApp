import React, { useEffect } from 'react'
import img1 from './../../assets/images/portfolio_files/poert1.png'
import img2 from './../../assets/images/portfolio_files/port2.png'
import img3 from './../../assets/images/portfolio_files/port3.png'
import Footer from '../footer/Footer'
const Portoflio = () => {
  



 function show(e){
   console.log(e.target.src);

   
 }     









    return (
        <>
            <div>
                <div className="container">
                    <div className="header text-center">
                        <h1>PORTFOLIO COMPONANT</h1>
                        <div className="d-flex justify-content-center align-items-center ss2">

                            <i className="fa-solid fa-star text-black position-relative"></i>
                        </div>
                    </div>


                    <div className="row g-5">
                        <div  className="col-md-4">
                          <div className="innner position-relative">
                              <img onClick={show} src={img1} alt="" className='w-100 rounded' />
                            <div  className="plus rounded d-flex justify-content-center align-items-center">
                              <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="innner position-relative">
                              <img src={img2} alt="" className='w-100 rounded' />
                            <div className="plus rounded d-flex justify-content-center align-items-center">
                              <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="innner position-relative">
                              <img src={img3} alt="" className='w-100 rounded' />
                            <div className="plus rounded d-flex justify-content-center align-items-center">
                              <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="innner position-relative">
                              <img src={img1} alt="" className='w-100 rounded' />
                            <div className="plus rounded d-flex justify-content-center align-items-center">
                              <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="innner position-relative">
                              <img src={img2} alt="" className='w-100 rounded' />
                            <div className="plus rounded d-flex justify-content-center align-items-center">
                              <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="innner position-relative">
                              <img src={img3} alt="" className='w-100 rounded' />
                            <div className="plus rounded d-flex justify-content-center align-items-center">
                              <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="big-img d-none " id='img'>
                      <div className="sm-img">
                        sss
                      </div>
                    </div>

        </>)
}

export default Portoflio