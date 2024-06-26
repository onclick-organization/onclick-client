'use client'
import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ videoLink }) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <ReactPlayer url={videoLink} controls={true} width='100%' height='95vh' />
    </div>
  )
}

export default VideoPlayer
