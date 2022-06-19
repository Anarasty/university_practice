import React from "react";
import { useGlobalContext } from "./context";
import { Search } from "./search";

export const HomeImage = () => {
  const { bannerImage, homePageImageUrl } = useGlobalContext();
  document.addEventListener("DOMContentLoaded", function () {
    bannerImage();
  });
  return (
    // <div className="home-img" style={{backgroundImage: "url("+ homePageImageUrl +")", backgroundAttachment: "fixed"}}>
    <div className="home-img">
      <div>
        <Search />
      </div>
    </div>
  );
};
