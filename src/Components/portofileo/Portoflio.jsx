import React, { useEffect } from 'react'
import img1 from './../../assets/images/portfolio_files/poert1.png'
import img2 from './../../assets/images/portfolio_files/port2.png'
import img3 from './../../assets/images/portfolio_files/port3.png'
import { useState } from 'react'
import Modual from '../modual/Modual'
import Card from '../card/Card'
 const imagelist = [img1,img2,img3,img1,img2,img3]
const Portoflio = () => {
  const [display, setdisplay] = useState(false)
  const [change, setchange] = useState(null)
  
  
  function show(e){
    // e => img src
    setchange(e)
    setdisplay(true)
    
  }     
 
  
  
  function back(e){
console.log(e.target.classList);
if(e.target.classList.contains("big-img")){

  setdisplay(false)
}

  }






    return (
        <>
            <div>
                <div className="container">
                    <div className="header text-center py-5">
                        <h1>PORTFOLIO COMPONANT</h1>
                        <div className="d-flex justify-content-center align-items-center ss2">

                            <i className="fa-solid fa-star text-black position-relative"></i>
                        </div>
                    </div>


                    <div className="row g-5 mb-5">
                    {imagelist.map(function(ele,idx){return <Card  eel={ele}  show={show} idx={idx}/>})}    
                    
                    </div>


               
                </div>
                 {
                  display && <Modual bk={back} change={change}  />
                }
            </div>
                    

        </>)
}

export default Portoflio