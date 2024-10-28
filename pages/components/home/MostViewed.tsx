import ReusableButtonGradient from "../ReusableButtonGradient";

const MostViewed: React.FC = () => {
  return (
    <div className="my-[56px] py-[24px]">
      <div className="flex items-center justify-between py-[72px] px-[120px]">
        <h1 className="w-[460px] text-[48px] font-bold">
          Our property most viewed
        </h1>
        <ReusableButtonGradient name="See More" />
      </div>
      <div className="rounded-xl relative px-custom">
        <h1>Mega Regency</h1>
      </div>
    </div>
  );
};

export default MostViewed;
