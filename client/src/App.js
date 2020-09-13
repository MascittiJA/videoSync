import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import './App.css';

import {socket} from "./service/socket";

function App() {
  const [playing, setPlaying] = useState(false);
  const player = useRef(null);

  useEffect(() => {
    console.log("USE EFFECT - PAUSE!!!")

    socket.on('pause', () => {
      console.log("Pause - ", socket.id, Date.now());
      setPlaying(false)
    });
    
    socket.on('play', ({seekTime}) => {
      console.log("Play - ", socket.id, " - ", Date.now(), " - ", seekTime);
      setPlaying(true);
    });

    return () => {
      // unsubscribe from event for preventing memory leaks
      socket.off('play');
      socket.off('pause');
    };
  },[]);

  return (
    <div className="App">
      <div className='player-wrapper'>

        <ReactPlayer 
          ref={player}
          className='react-player'
          url='https://www.youtube.com/watch?v=bsJj-W_jNzs&ab_channel=DJMag'
          controls
          loop
          playing={playing}
          width='80%'
          height='100%'
          onPause={() => {
            if (playing) {
              socket.emit('pauseSRV');
            }
          }}
          onPlay={()=> {
            if (!playing) {
              socket.emit('playSRV', {seekTime: player.current.getCurrentTime()})
            }
          }}
        />

      </div>
    </div>
  );
}

export default App;
