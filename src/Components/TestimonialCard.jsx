

const TestimonialCard = ({image,className,name,title,content}) => {
  return (
    <div className={className + " border rounded-2xl bg-white p-4 border-white  overflow-hidden font-nunito text-primary-green h-fit"}>
      <p className="py-2">{content}</p>
      <div className="flex py-2 gap-3 items-center">
        <img src={image} alt={name} className=" rounded-full overflow-hidden w-1/6" />
        <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <h5>{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
