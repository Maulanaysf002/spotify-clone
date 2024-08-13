import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <>
      <div className="flex w-full h-9 justify-between items-start font-semibold">
        <div className="flex gap-2 items-center">
          <img src={assets.arrow_left} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
          <img src={assets.arrow_right} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-black bg-white px-4 py-1 text-[15px] rounded-full hidden md:block">Explore Premium</p>
          <p className="text-white bg-black px-4 py-1 text-[15px] rounded-full hidden md:block">Install App</p>
          <p className="text-white bg-green-500 w-7 h-7 flex items-center justify-center text-[15px] rounded-full">M</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <p className="bg-white text-black rounded-full px-4 py-1 cursor-pointer">All</p>
        <p className="bg-black text-white rounded-full px-4 py-1 cursor-pointer">Music</p>
        <p className="bg-black text-white rounded-full px-4 py-1 cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
