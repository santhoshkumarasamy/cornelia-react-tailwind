import image1 from "../assets/always go furthur.png";
import image2 from "../assets/cornileo big.png";
import image3 from "../assets/each lesser detail matters.png";

const Discover = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1240px] mx-auto w-full grid md:grid-cols-2 px-12 py-16 h-full">
        <div className="w-full  order-2 md:order-1 ">
          <div className=" w-[45%] left-10 aspect-square relative  bg-primary-green overflow-hidden rounded-full">
            <img src={image2} alt="" className="   scale-[2.1] " />
          </div>
          <div className=" w-[30%] right-10  ml-auto mr-10 relative aspect-square  bg-primary-pink overflow-hidden rounded-full">
            <img
              src={image3}
              alt=""
              className="   scale-[0.75] "
            />
          </div>
          <div className=" w-[35%] left-5 bottom-10 aspect-square relative  bg-[#C4C4C4] overflow-hidden rounded-full">
            <img
              src={image1}
              alt=""
              className=" scale-95 object-cover w-full left-3 "
            />
          </div>
        </div>
        <div className="flex flex-col gap-8  w-full h-full md:py-20 py-8 order-1 md:order-2">
          <h1 className=" text-6xl text-primary-green font-extrabold py-4 text-center md:text-left">
            Each Lesser <br /> detail matter
          </h1>
          <p className="text-xl ">
            Cornelia is an all-in-one tool that helps teams design every part of
            the product experience. Download and get to a functional prototype
            faster than ever.
          </p>
          <button className="rounded-full border-2 border-primary-green p-2 px-4 text-xl font-semibold text-primary-green mx-auto md:mx-0 ">
            Discover Cornelia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
