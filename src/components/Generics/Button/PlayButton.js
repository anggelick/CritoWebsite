import React from 'react'

const PlayButton = ({ text, url }) => {
    return (
      <a className="play-button" href={url}> {text} 
      <i className="fa-regular fa fa-play-circle"></i></a>
    )
  }
export default PlayButton