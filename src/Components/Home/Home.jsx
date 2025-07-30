import React from 'react'
import photo from "./../../assets/images/avataaars.png.svg"
import Footer from '../footer/Footer'
const Home = () => {
  return (
    <>
    <div className="home text-center ">
      <div className="home-img ">
       <img src={photo} alt=""  className='w-25'/>
      </div>
        <h1 className=" text-white">START FRAMEWORK</h1>
        <div className="d-flex justify-content-center align-items-center ss">
          
          <i class="fa-solid fa-star text-white position-relative"></i>
        </div>
        <div>
          <h5 className='text-white m-0 p-2'>  Graphic Artist - Web Designer - Illustrator</h5>
        </div>

    </div>



    </>
  )
}

export default Home