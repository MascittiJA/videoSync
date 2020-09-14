import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/vimeo';
import './App.css';

import {socket} from "./service/socket";

function App() {
  const [playing, setPlaying] = useState(true);
  const [updating,setUpdating] = useState(false);
  const player = useRef(null);

  const update = function(callback) {
    setUpdating(true);
    callback();
    setTimeout(() => {
      setUpdating(false);
    }, 300);
  }
  
  useEffect(() => {

    socket.on('pause', () => {
      console.log("Pause - ", socket.id, Date.now());
      update(() => setPlaying(false));
    });
    
    socket.on('play', ({seekTime}) => {
      console.log("Play - ", socket.id, " - ", Date.now(), " - ", seekTime);
      update(() => setPlaying(true));
    });

    socket.on('seek', ({seekTime}) => {
      console.log("Seek - ", socket.id, " - ", Date.now(), " - ", seekTime);
      update(() => {
        if (seekTime) {
          player.current.seekTo(seekTime, 'seconds');
        }
        setPlaying(true);
      });
    });

  },[]);

  return (
    <div className="App">
      <div className='player-wrapper'>

        <ReactPlayer 
          ref={player}
          className='react-player'
          url='https://vimeo.com/14878950'
          controls
          loop
          playing={playing}
          width='80%'
          height='100%'
          onPause={() => {
            if (!updating) {
              socket.emit('pauseSRV');
            }
          }}
          onPlay={()=> {
            if (!updating) {
              socket.emit('playSRV', {seekTime: player.current.getCurrentTime()})
            }
          }}
          onSeek={()=> {
            if (!updating) {
              socket.emit('seekSRV', {seekTime: player.current.getCurrentTime(), seekID: socket.id})
            }
          }}
        />

      </div>
    </div>
  );
}

export default App;
