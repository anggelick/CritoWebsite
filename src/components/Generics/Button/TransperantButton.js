import React from 'react'

const ButtonTrans = ({ text, url }) => {
  return (
    <a className="btn-transperant" href={url}> {text} 
    <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default ButtonTrans