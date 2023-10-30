import React from 'react'

const ButtonBlack = ({ text, url }) => {
  return (
    <a className="btn-black" href={url}> {text} 
    <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default ButtonBlack