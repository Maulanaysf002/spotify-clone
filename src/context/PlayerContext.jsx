import { createContext, useEffect, useRef, useState } from 'react';
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
  const [time, setTime] = useState({
    currentTime: {
      seccond: 0,
      minute: 0,
    },
    totalTime: {
      seccond: 0,
      minute: 0,
    },
  });

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

  // play song with id
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    await setPlayStatus(true);
  };

  // prev
  const prev = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // prev
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // seeksong, klik bar untuk memainkan lagu
  const seekSong = async (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  };

  // logic player time
  useEffect(() => {
    setTimeout(() => {
      // ketika waktu play audio berubah
      audioRef.current.ontimeupdate = () => {
        const songPersentation = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        seekBar.current.style.width = Math.floor(songPersentation) + '%';
        setTime({
          currentTime: {
            seccond: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            seccond: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  // membuat context value, apapun state atau func yang dimasukan dapat diakses semua komponen.
  // type   : object, value : func, state.
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    playStatus,
    time,
    setTime,
    setTrack,
    Play,
    Pause,
    playWithId,
    prev,
    next,
    seekSong,
  };

  // Semua komponen(props.children) yang dibungkus oleh Provider dan akan menerima data dari Context
  return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

// export player context provider
export default PlayerContextProvider;
