import {BiMenuAltRight} from 'react-icons/bi'
const Nav = () => { 
  return (
    <nav className="fixed backdrop-blur-sm w-full z-50 bg-white/60 ">
      <div className="mx-auto h-20 flex flex-row px-4 justify-between max-w-[1240px] w-full  items-center text-primary-green ">
        <h2 className="text-3xl font-motter">Cornelia</h2>
        <div className=" hidden  md:flex gap-6 items-center font-semibold  font-nunito">
          <div>Learn</div>
          <div>About</div>
          <div>Why</div>
          <button className=" bg-primary-green p-2 px-12 ml-4 rounded-full  font-bold text-primary-pink">Download</button>
        </div>
        <div className=' md:hidden text-primary-pink rounded-full bg-primary-green p-3 text-3xl cursor-pointer'>
          <BiMenuAltRight />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
