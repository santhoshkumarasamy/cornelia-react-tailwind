import image from '../assets/exist.png'
import image1 from '../assets/appstore.png'

const Exist = () => {
  return (
    <section>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2'>
        <div className='text-primary-green px-16 font-nunito flex flex-col gap-8 py-12 '>
            <img src={image1} alt="" className='w-[35%] mx-auto'/>
            <h2 className='w-full text-center text-7xl font-extrabold'>
                Unicorns Exist
            </h2>
            <p className=' w-full text-xl mx-auto'>
            Download our application on the AppStore or the 3D model of Cornelia and meet your new mascot ! Take some cool pictures of her and share it on Instagram, Twitter and Facebook with <span className='font-bold'>#CorneliaTheUnicorn !</span>
            </p>
            <button className='border-2 border-primary-green p-2 px-6 rounded-full text-lg font-semibold w-[80%] mx-auto md:mx-0 md:w-fit '>Meet Cornelia in VR</button>
        </div>
        <div className='bg-gradient-to-br from-transparent via-white to-primary-pink relative'>
            <img src={image} alt="" className='h-full w-full object-cover bottom-0'/>
        </div>
      </div>
    </section>
  )
}

export default Exist
