import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] py-2 px-3 cursor-pointer rounded hover:bg-[#ffffff26]">
      <img src={image} className="rounded" />
      <p className="font-bold mt-2 mb-1 text-white">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
