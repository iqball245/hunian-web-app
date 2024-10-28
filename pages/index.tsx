import Hero from "./components/home/Hero";
import MostViewed from "./components/home/MostViewed";
import SiteMenu from "./components/home/SiteMenu";
import TrustedBy from "./components/home/TrustedBy";

const Home = () => {
  return (
    <>
      <SiteMenu />
      <Hero />
      <TrustedBy />
      <MostViewed />
    </>
  );
};

export default Home;
