import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import Gurungmagar from "../components/Gurungmagar/Gurungmagar";
import Newsletter from "../components/Newsletter/Newsletter";

const home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Gurungmagar />
      <Newsletter />
    </div>
  );
};

export default home;
