import React from "react";
import { InfoSection } from "../../components";
import { homeObjone } from "./Data";
function Home(props) {
  return (
    <>
      <InfoSection {...homeObjone} />
    </>
  );
}

export default Home;
