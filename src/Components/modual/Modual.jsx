import React from 'react'

const Modual = ({bk , change}) => {
  console.log(change);
  
  return (
    <div>
        <div onClick={(bk) } className="big-img  " id='img'>
                      <div className="sm-img">
                        <img src={change} className='w-100' alt="" />
                      </div>
                    </div>
    </div>
  )
}

export default Modual