import React from 'react'

const Card = ({eel,show}) => {
  //eel => img src
    // console.log(eel);
    
  return (
    
        <div   className="col-md-4">
                              <div onClick={function(){
                                       show(eel)
                              }} className="innner position-relative">
                                  <img  src={eel} alt="" className='w-100 rounded' />
                                <div  className="plus rounded d-flex justify-content-center align-items-center">
                                  <i className="fa-solid fa-plus fs-1 fw-bolder text-white"></i>
                                </div>
                              </div>
                            </div>
                            
  )
}

export default Card