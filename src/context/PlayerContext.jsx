import { createContext, useRef, useState } from 'react';
import { songsData } from '../assets/assets';

// devinisikan penmbuatan context
export const PlayerContext = createContext();

// membuat provider untuk menyediakan data yang akan digunakan children
const PlayerContextProvider = (props) => {
  // manipulasi dom
  const audioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  // use state
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  // function play
  const Play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  // function pause
  const Pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  // membuat context value, apapun state atau func yang dimasukan dapat diakses semua komponen.
  // type   : object, value : func, state.
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    playStatus,
    setTrack,
    Play,
    Pause,
  };

  // Semua komponen(props.children) yang dibungkus oleh Provider dan akan menerima data dari Context
  return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

// export player context provider
export default PlayerContextProvider;
