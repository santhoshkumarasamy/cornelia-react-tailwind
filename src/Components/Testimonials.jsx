import image1 from "../assets/user1.png";
import image2 from "../assets/user2.png";
import image3 from "../assets/user3.png";
import image4 from "../assets/user4.png";
import image5 from "../assets/user5.png";
import image6 from "../assets/user6.png";
import image7 from "../assets/user7.png";
import image8 from "../assets/user8.png";
import image9 from "../assets/user9.png";
import image10 from "../assets/user10.png";
import TestimonialCard from "./TestimonialCard";
import bgimage from '../assets/testimonials.png'
const Testimonials = () => {
  return (
    <section className="w-full ">

      <div className="max-w-[1240px] bg-gradient-to-b from-[#FFCCBC]  to-transparent   mx-auto bg-opacity-0 h-full relative">
        <img src={bgimage} alt="" className="-z-10 absolute object-cover w-full h-full"/>
        <div className="   w-full h-full py-12 px-8 ">

       
        <h1 className="w-full text-center text-white text-6xl font-extrabold">
          They talk about it better that us
        </h1>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-[70%] mx-auto md:w-4/5">
          <TestimonialCard
            image={image1}
            title={"CEO @Combinator"}
            name={"Peter Miguel"}
            content={
              "You've saved our business! Since I invested in Cornelia I made over 100,000 dollars profits. Thank you so much for your help"
            }
            className={""}
          />
          <TestimonialCard
            image={image3}
            title={"Digital Manager @FullSocial"}
            name={"Sarah Ewing"}
            content={"Without Cornelia, we would have gone bankrupt by now"}
            className={"hidden md:block"}
          />
          <TestimonialCard
            image={image9}
            title={"Traffic Manager @Upside"}
            name={"Larry Davis"}
            content={
              "We've seen amazing results already. Buy this now. I couldn't have asked for more than this. Cornelia has completely surpassed our expectations. I just can't get enough of Cornelia. I want to get a T-Shirt with Cornelia on it so I can show it off to everyone. Thanks to Cornelia, we've just launched our 5th website! I will let my mum know about this, she could really make use of Cornelia! 'Thanks for the great service. The service was excellent. Cornelia is worth much more than I paid. I would gladly pay over 600 dollars for Cornelia. We can't understand how we've been living without Cornelia."
            }
            className={" row-span-2 hidden md:block"}
          />
          <TestimonialCard
            image={image2}
            title={"Happiness Manager @BlueSky"}
            name={"Linda R. Huff"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero cras "
            }
            className={""}
          />
          <TestimonialCard
            image={image4}
            title={"Product Owner @Generate"}
            name={"Debra Peters"}
            content={
              "Cornelia did exactly what you said it does. I'd be lost without Cornelia. I just can't get enough of Cornelia. I want to get a T-Shirt with Cornelia on it so I can show it off to everyone. I would like to personally thank you for your outstanding product."
            }
            className={" hidden md:block "}
          />
          <TestimonialCard
            image={image6}
            title={"Product Designer @Tools"}
            name={"Valentine Sutton"}
            content={
              "We can't understand how we've been living without Cornelia. We have no regrets! Since I invested in Cornelia I made over 100,000 dollars profits. Needless to say we are extremely satisfied with the results. Cornelia is the most valuable business resource we have EVER purchased. Definitely worth the investment. Not able to tell you how happy I am with Cornelia. I am so pleased with this product."
            }
            className={" row-span-2"}
          />
          <TestimonialCard
            image={image5}
            title={"Sales Manager @UShould"}
            name={"Vida Inman"}
            content={
              "We were treated like royalty"
            }
            className={"hidden md:block"}
          />
          <TestimonialCard
            image={image10}
            title={"Photographer @Streetz"}
            name={"Joe Lembrouille"}
            content={
              "Cornelia is both attractive and highly adaptable. Just what I was looking for. I don't always clop, but when I do, it's because of Cornelia. I love Cornelia. Great job, I will definitely be ordering again! Thank you for making it painless, pleasant and most of all hassle free! You guys rock! Thanks for the great service. The service was excellent. Cornelia is worth much more than I paid. I would gladly pay over 600 dollars for Cornelia. We can't understand how we've been living without Cornelia."
            }
            className={" row-span-2 hidden md:block"}
          />
          
          <TestimonialCard
            image={image7}
            title={"CEO @FunkyToys"}
            name={"John Morgan"}
            content={
              "I don't know what else to say. I made back the purchase price in just 48 hours! The service was excellent. Cornelia saved my business. I love Cornelia. We've seen amazing results already. Cornelia is the most valuable business resource we have EVER purchased. If you aren't sure, always go for Cornelia."
            }
            className={" row-span-2 hidden md:block"}
          />
          <TestimonialCard
            image={image8}
            title={"CTO @Stoock"}
            name={"Helen Womack"}
            content={
              "Cornelia has got everything I need. Your company is truly upstanding and is behind its product 100%. I can't say enough about Cornelia. I'm good to go."
            }
            className={""}
          />
        </div> 
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
