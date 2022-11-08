import image from '../assets/let the magic happen.png'

const Magic = () => {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto w-full h-full bg-[#F5F5F5]">
        <div className=" text-primary-green text-center flex flex-col gap-8 w-full py-12">
          <h1 className=" text-6xl text-primary-pink font-extrabold">
            Let the magic happen
          </h1>
          <p className="w-[70%] mx-auto text-xl">
            Surround yourself with the most faithful companions and embark
            together on fantastic new adventures! Pocket, medium or XXL format,
            find the Cornelia that best suits your environment.{" "}
          </p>
          <p className=" w-[50%] mx-auto text-xl">
            <span className="font-bold">Oh, and don't worry:</span> Cornelia
            feeds on your bad vibes, no need to give her water or grass !
          </p>
        </div>
        <div className='w-full h-full '>
          <img src={image} alt="let the magic happen" className=' h-80 md:h-auto object-cover opacity-80 '/>
        </div>
        
      </div>
    </section>
  );
};

export default Magic;
