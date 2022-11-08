import figma from "../assets/figma.png";
import sketch from "../assets/sketch.png";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8  w-full bg-primary-green justify-center items-center text-primary-pink py-20 text-center md:px-12">
        <h1 className="text-7xl font-extrabold w-[70%] font-motter py-8">Get Started with Cornelia Today</h1>
        <div className="flex gap-4 flex-col md:flex-row">
          <button className="flex gap-2 w-fit items-center px-8 p-4 text-lg font-normal border-2 border-primary-pink">
            <img src={figma} alt="" className=" w-7" /> Download for Figma
          </button>
          <button className="flex gap-2 w-fit items-center px-8 p-4 text-lg font-normal border-2 border-primary-pink">
            <img src={sketch} alt="" className=" w-7" /> Download for Sketch
          </button>
        </div>
        <div className=" md:self-start md:text-left mt-8">
            <h2 className="font-motter text-2xl ">Cornelia</h2>
            <p>Design and Development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
