import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Home.scss";
import ImageBox from "./ImageBox";
import bgPic from "../images/waterJug.jpeg";
import ProductCard from "./ProductCard";
import Video from "./Video";
import DownloadSection from "./DownloadSection";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked!");
    navigate("/productregisteration");
  };

  return (
    <div className="home-container">
      <Button
        label="Product Register / Login"
        onClick={handleClick}
        className="butn"
      />
      <section>
         
        <h2>Get Inspired</h2>
        <ImageBox
          backgroundImage={bgPic}
          heading="RUNNING WATER ON THE GO"
          text="The only off-grid water solution you’ll ever need"
          link="https://widget-hosts.mavenoid.com/dometic-nga-test/"
        />
      </section>
      <Video
        heading="How to use that"
        videoUrl="https://www.youtube.com/embed/gvTaCJakVRo"
        videotitle="DOMETIC | Dometic GO Hydration Water Jug 11L"
      />
      <Video
        heading="Expand your experiance"
        videoUrl="https://www.youtube.com/embed/IfU6i0osJWg"
        videotitle="DOMETIC | GO HYD-J11 Hydration Water Jug with Water Tap"
      />

      <ProductCard />
      <DownloadSection/>
    </div>
  );
}

export default Home;
