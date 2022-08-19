import BuyASelfStorage from "../components/home-components/BuyASelfStorage";
import Featured from "../components/home-components/Featured";
import Header from "../components/home-components/Header";
import HomeActiveListings from "../components/home-components/HomeActiveListings";
import LearnStorage from "../components/home-components/LearnStorage";
import SellYourSelfStorage from "../components/home-components/SellYourSelfStorage";
import WriteToUs from "../components/home-components/WriteToUs";

const Home = () => {
  return (
    <>
      <Header />
      <Featured />
      <HomeActiveListings />
      <SellYourSelfStorage />
      <BuyASelfStorage />
      <LearnStorage />
      <WriteToUs />
    </>
  );
};

export default Home;
