import Image from "next/image";

const TrustedBy: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white px-custom my-[56px] py-[24px]">
      <h1 className="text-[32px] text-black_custom font-bold">Trusted By</h1>
      <div className="flex items-center gap-x-[95px]">
        <Image src="/img/jago.svg" alt="jago" width={125} height={43} />
        <Image src="/img/gopay.svg" alt="gopay" width={125} height={43} />
        <Image src="/img/mandiri.svg" alt="mandiri" width={125} height={43} />
        <Image src="/img/ovo.svg" alt="ovo" width={125} height={43} />
      </div>
    </div>
  );
};

export default TrustedBy;
