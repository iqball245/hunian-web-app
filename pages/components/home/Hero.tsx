import Image from "next/image";
import ReusableButtonGradient from "../ReusableButtonGradient";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-[82px] px-[120px] ">
      <div className="flex items-center justify-between">
        <h1 className="leading-normal text-6xl font-bold w-[584px]">
          The Best Place To Find Your Dream{" "}
          <span className="text-primary">Property</span>
        </h1>
        <div>
          <p className="text-[16px] w-[437px]">
            We are a real estate agency that will assist you in building your
            dreams, we will also assist in making a home design that suits your
            taste
          </p>
          <ReusableButtonGradient name="Let's Discuss" />
        </div>
      </div>
      <div className="mt-[44px] relative">
        <div className="absolute rounded-xl px-[32px] py-[24px] w-[554px] border-[3px] bottom-10 left-[50%] transform -translate-x-1/2 bg-[#1b1a1b] bg-opacity-50 backdrop-blur-md text-white flex justify-between">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              300<span className="text-primary">+</span>
            </h2>
            <p className="text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              200<span className="text-primary">+</span>
            </h2>
            <p className="text-sm">Premium Product</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              100<span className="text-primary">+</span>
            </h2>
            <p className="text-sm">Award Winnings</p>
          </div>
        </div>
        <Image
          width={1199}
          height={526}
          priority
          src="/img/hero.svg"
          alt="hero image"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
