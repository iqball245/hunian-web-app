interface Props {
  name: string;
}
const ReusableButtonGradient: React.FC<Props> = ({ name }) => {
  return (
    <button
      className={`rounded-full mt-[24px] py-[18px] px-[24px] bg-gradient-custom text-white `}
    >
      {name}
    </button>
  );
};

export default ReusableButtonGradient;
