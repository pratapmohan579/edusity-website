import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/WhatsApp Video 2023-08-17 at 14.52.55.mp4'

const VideoPlayer = ({playState, SetPlayState}) => {
const player = useRef(null);
const closePlayer = (e)=>{
  if(e.target === player.current){
    SetPlayState(false)
  }
}
return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
      onClick={closePlayer}>
       <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer