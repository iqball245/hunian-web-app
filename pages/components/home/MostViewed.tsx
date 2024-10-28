import ReusableButtonGradient from "../ReusableButtonGradient";
import PropertyCardGrid from "./PropertyCardGrid";

const MostViewed: React.FC = () => {
  return (
    <div className="my-[56px] py-[24px] bg-white">
      <div className="flex items-center justify-between py-[72px] px-[120px]">
        <h1 className="w-[460px] text-[48px] font-bold text-black_custom">
          Our property most viewed
        </h1>
        <ReusableButtonGradient name="See More" />
      </div>
      <div className="rounded-xl relative px-custom">
        <PropertyCardGrid />
      </div>
    </div>
  );
};

export default MostViewed;
