import React from 'react';
import URLSelectro from './component/URLSelector';
import VideoPlayer from './component/VideoPlayer';

import { socket } from "./service/socket";

function App() {
  return (
    <div className="App">
      <URLSelectro socket={socket}/>
      <VideoPlayer socket={socket}/>      
    </div>
  );
}

export default App;
