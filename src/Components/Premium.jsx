
import image from '../assets/premium 3d quality.png'
const Premium = () => {
  return (
    <section className="w-full relative pb-12">
      <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        
        <div className='text-primary-green  text-xl flex-col flex gap-12 font-nunito justify-center md:pl-12 px-8'>
            <h2 className='text-5xl md:text-6xl text-center md:text-left font-extrabold'>Premium <br></br> 3D Quality</h2>
            <p className=' md:w-[90%]'>Now the difference between a unicorn and a pegasus is quite clear a unicorn has a horn which usually stores their magically powers while a pegasus can only fly with its gorgeous wings. Now the difference between a unicorn and a pegasus is quite clear a unicorn has a horn.</p>
        </div>
        <div className='bg-primary-green rounded-full border-white md:border-[5rem] border-[2rem] aspect-square md:w-full w-3/4   relative my-auto mx-auto'>
            <img src={image} alt="" className='rounded-t-full absolute '/>
        </div>
      </div>
    </section>
  )
}

export default Premium
