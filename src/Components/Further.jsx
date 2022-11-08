import {BsMouse} from 'react-icons/bs'
import image from '../assets/always go furthur.png'
const Further = () => {
  return (
    <section className="w-full relative ">
      <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2  mx-auto ">
        <div className='bg-primary-pink rounded-full border-white md:border-[5rem] border-[2rem] aspect-square md:w-full w-3/4 mx-auto my-auto  relative order-2 md:order-1'>
            <img src={image} alt="" className='rounded-b-full absolute bottom-0 w-full h-full'/>
        </div>
        <div className='text-primary-green  text-xl flex-col flex gap-12 font-nunito justify-center order-1 px-8 py-12'>
            <h2 className='text-5xl md:text-6xl text-center md:text-left text-primary-pink font-extrabold ease-linear'>Always <br></br> Go Further</h2>
            <p className=' md:w-[90%] text-center md:text-left'>Decline Cornelia as you wish! Black, dark grey, white, light grey, prussian blue ... Choose your colour, size and characteristics! And if that's not enough, personalise it to make it unique, in your own image. So open up the field of possibilities,  the world is yours !</p>
            <div className='flex items-center gap-3 justify-center md:justify-start'>
                <BsMouse />
                <p className="uppercase text-sm font-medium">Scroll TO KNOW MORE</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Further
