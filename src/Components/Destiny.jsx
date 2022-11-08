import image from '../assets/cornileo big.png'

const Destiny = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className=' max-w-[1240px] mx-auto bg-primary-green grid grid-cols-1 md:grid-cols-2  '>
        <div className='py-8 md:py-16  text-primary-pink flex flex-col gap-8 font-nunito justify-around px-12'>
            <h2 className=' text-center md:text-left text-6xl font-extrabold'>Choose <br /> your destiny</h2>
            <p className='md:w-[80%] text-center md:text-left'> Each unicorn has its own personality and symbolism. Get to know your new mascot and surround yourself with a strong ally. Thus choose the brave one and you will be able to face any situation. Take the sweet Cornelia and protect your health. If you need more luck, meet the Magic Cornelia! If you’re born to be bold, choose the Impetuous Cornelia : nothing will defeat you.</p>
            <button className=' border-primary-pink  border mx-auto md:ml-0 w-fit p-2 rounded-full px-4'>
                Learn more about her history
            </button>
        </div>
        <div className=' flex items-end drop-shadow-[8rem_0rem_0.4rem_#00140D] relative w-full h-fit md:h-full '>
            <img src={image} alt="cornelio big"  className='h-[80%] object-cover  bottom-0 mx-auto '/>
        </div>
      </div>
    </section>
  )
}

export default Destiny
