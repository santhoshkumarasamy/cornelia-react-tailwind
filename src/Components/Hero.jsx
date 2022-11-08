import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <header className="w-full pt-20 ">
      <div className="max-w-[1240px] md:max-h-[800px] mx-auto relative  w-full h-[calc(90vh-5rem)] overflow-hidden ">
        <div className="w-full h-full  items-center flex text-center mx-auto">
          <h1 className="text-6xl  lg:text-9xl  w-full z-10 ease-in-out duration-5 00 px-2">
            <div className=" text-primary-pink !font-motter">Cornelia </div>
            <div className= "  text-primary-pink !font-motter">is the new</div>
            <div className=" bg-gradient-to-b from-primary-green to-black text-transparent bg-clip-text !font-motter">black</div>
          </h1>
        </div>
        <img
          src={hero}
          alt="horse"
          className="absolute md:left-[20vw]   md:h-[70%] h-[50%]  bottom-0 object-fill "
        />
      <div className="absolute top-20 p-6 opacity-40 bg-primary-pink rounded-full"></div>
      <div className="absolute bottom-60 left-40 p-6 opacity-40 bg-primary-pink rounded-full"></div>
      <div className="absolute bottom-52 right-10 p-6 opacity-40 bg-primary-pink rounded-full"></div>
      </div>
    </header>
  );
};

export default Hero;
