import { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  // definisikan context
  const { track, seekBar, seekBg, Play, Pause, playStatus } = useContext(PlayerContext);

  return (
    <div className="bg-black h-[10%] flex justify-between items-center text-white px-4">
      <div className="lg:flex items-center gap-4 hidden">
        <img src={track.image} alt="image" className="w-12" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center m-auto">
        <div className="flex gap-4">
          <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
          {playStatus ? <img src={assets.pause_icon} alt="" className="w-4 cursor-pointer" onClick={Pause} /> : <img src={assets.play_icon} alt="" className="w-4 cursor-pointer" onClick={Play} />}
          <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-20 bg-green-800 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="" className="w-4" />
        <img src={assets.mic_icon} alt="" className="w-4" />
        <img src={assets.queue_icon} alt="" className="w-4" />
        <img src={assets.speaker_icon} alt="" className="w-4" />
        <img src={assets.volume_icon} alt="" className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} alt="" className="w-4" />
        <img src={assets.zoom_icon} alt="" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
