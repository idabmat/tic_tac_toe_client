import React from 'react'

const Button = ({ name, onClick, onMouseEnter, onMouseLeave }) => {
  return(
    <a className="btn" onClick={ onClick } onMouseEnter={ onMouseEnter} onMouseLeave={ onMouseLeave }>
      {name}
      <style jsx>{`
        .btn {
          background-color: #546e7a;
          color: #fff;
          cursor: pointer;
          padding: 20px;
          text-align: center;
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }
        .btn:hover {
          background-color: #29434e;
        }
      `}</style>
    </a>
  )
}

export default Button
