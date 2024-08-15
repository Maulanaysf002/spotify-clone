import { useContext } from 'react';
import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { PlayerContext } from './context/PlayerContext';

function App() {
  // gunakan player context
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
