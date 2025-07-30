import React from 'react'

const Footer = () => {
  return (
<>
<div className='footer'>

<div className="container">
    <div className="row">
        <div className="col-md-4  text-center p-4 text-white">
          <h2>location</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 text-center  p-4 text-white">
          <h2>AROUND THE WEB</h2>
          <i class="fa-brands fa-facebook fa-spin fa-spin-reverse p-1 fs-3" ></i>
          <i class="fa-brands fa-twitter fa-spin fa-spin-reverse p-1 fs-3"></i>
          <i class="fa-brands fa-linkedin fa-spin fa-spin-reverse p-1 fs-3"></i>
          <i class="fa-solid fa-globe fa-spin fa-spin-reverse p-1 fs-3"></i>
        </div>
        <div className="col-md-4  text-center  p-4 text-white">
          <h2>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
</div>


</div>

    <div className='text-center foter2'>
        <h3 className='fs-5 text-white p-5 '>Copyright © Your Website 2021</h3>
    </div>





</>  )
}

export default Footer