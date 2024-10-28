import Image from "next/image";
import ReusableButtonGradient from "../ReusableButtonGradient";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center px-[120px] bg-black py-[56px]">
      <div className="flex items-center justify-between mt-[82px] max-w-full mx-auto">
        <h1 className="leading-normal text-6xl text-white font-bold w-[600px]">
          The Best Place To Find Your Dream{" "}
          <span className="text-primary">Property</span>
        </h1>
        <div className="flex flex-col items-start w-[437px]">
          <p className="text-[16px] text-white">
            We are a real estate agency that will assist you in building your
            dreams, we will also assist in making a home design that suits your
            taste
          </p>
          <ReusableButtonGradient name="Let's Discuss" />
        </div>
      </div>
      <div className="mt-[44px] relative w-full">
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
          width={0}
          height={0}
          priority
          src="/img/hero.svg"
          alt="hero image"
          objectFit="cover"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Hero;
