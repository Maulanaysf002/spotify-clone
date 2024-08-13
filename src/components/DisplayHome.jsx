import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import Navbar from './Navbar';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="text-white text-2xl my-5 font-bold ">Featured Chart</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-white text-2xl my-5 font-bold ">Today`s Biggest Hit</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => {
            return <SongItem key={index} image={item.image} name={item.name} desc={item.desc} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
