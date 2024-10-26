import Image from "next/image";

const SiteMenu: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-[25px] px-[120px]">
      <h1 className="text-2xl font-bold text-white">HUNIAN.</h1>
      <ul className="cursor-pointer flex gap-x-5 text-white">
        <li className="text-white ">HOME</li>
        <li className="opacity-50">PROPERTY</li>
        <li className="opacity-50">ABOUT</li>
        <li className="opacity-50">AGENTS</li>
        <li className="opacity-50">BLOG</li>
      </ul>
      <div className="flex gap-x-8 cursor-pointer">
        <Image
          width={24}
          height={24}
          priority
          src="icons/search.svg"
          alt="search icons"
        />
        <Image
          width={24}
          height={24}
          priority
          src="icons/cart.svg"
          alt="cart icons"
        />
        <Image
          width={24}
          height={24}
          priority
          src="icons/profile.svg"
          alt="profile icons"
        />
      </div>
    </div>
  );
};

export default SiteMenu;
