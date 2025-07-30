import React from 'react'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <>
    <div className="container">
        <div className="header text-center">
            <h1>conatct section</h1>
             <div className="d-flex justify-content-center align-items-center ss2">

                            <i className="fa-solid fa-star text-black position-relative"></i>
                        </div>
        </div>
        <div className="row d-flex flex-column ">
            <div className="col-md-6 m-auto ">
                <input className="form-control mt-2" type="text" placeholder=" user name" aria-label="default input example"/>

            </div>
            <div className="col-md-6 m-auto ">
                <input className="form-control mt-4" type="text" placeholder="use rage" aria-label="default input example"/>

            </div>
            <div className="col-md-6 m-auto ">
                <input className="form-control mt-4" type="text" placeholder="user pasword" aria-label="default input example"/>

            </div>
            <div className="col-md-6 m-auto ">
                <input className="form-control mt-4" type="text" placeholder="user email" aria-label="default input example"/>

            </div>
            <button className='btn btn-outline-info w-25 m-auto my-3'> send messgae</button>
        </div>
    </div>
    
    </>
  )
}

export default Contact