import React from "react";
import Wallpaper from "../assets/wallpaper.png";
import Jesse from "../assets/jesse.png";
import Walter from "../assets/walter.png";
import Hank from "../assets/hank.png";
import { Container, Button } from "react-bootstrap";
function Home() {
  return (
    <Container fluid="xl">
      <div className="  w-5/5 relative md:mt-0 lg:mt-6">
        <img
          src={Wallpaper}
          className="z-10 opacity-60 max-w-full "
          alt="wallpaper"
        />
        <div className=" text-xl sm:text-2xl  absolute top-2/4 left-2/4  lg:text-4xl col text-black bg-white opacity-80 rounded-xl translate-y-[-50%] translate-x-[-50%] p-3 border-solid border-2 border-black-500 ">
          Welcome to Breaking Bad & Better Call Saul Character Wiki
        </div>
      </div>
      <div className="flex-col py-28 w-5/5 md:flex-row flex sm:ml-5 md:gap-36 lg:gap-0 md:ml-4 lg:ml-0 bg-white">
        <div className=" justify-center flex-[0.5] flex gap-8 sm:gap-14 lg:ml-12 md:justify-start">
          <img
            src={Walter}
            className="sm:shadow-[35px_10px_5px_0px_rgba(0,0,0,0.75)] max-w-[40%] max-h-[26rem]   md:max-w-[60%] md:max-h-[27rem] border-solid border-2 border-black-500 "
            alt="walt"
          />

          <img
            src={Jesse}
            className="sm:shadow-[35px_10px_5px_0px_rgba(0,0,0,0.75)] 
            max-w-[40%] max-h-[26rem] lg:mt-9 md:max-w-[60%] md:max-h-[27rem] border-solid border-2 border-black-500"
            alt="jesse"
          />
        </div>

        <div className=" flex flex-[0.5] p-4 flex-col item-center justify-center  md:ml-0">
          <h2 className=" text-2xl sm:text-4xl p-4  ">
            View character information in card format
          </h2>
          <Button
            variant="dark"
            href="/breakingbad"
            className=" w-64 self-center"
          >
            Browse Cards
          </Button>
        </div>
      </div>
      <div className=" w-5/5 py-24 flex flex-row sm:ml-6 md:gap-20 sm:gap-12">
        <div className="text-2xl sm:text-4xl max-w-[60%] self-center ">
          Mark your favourite characters as favourite and view them in
          Favourites page
        </div>
        <div>
          <img
            src={Hank}
            className="sm:w-[85%] sm:max-h-[38rem] sm:shadow-[35px_10px_5px_0px_rgba(0,0,0,0.75)] "
            alt="favourite"
          />
        </div>
      </div>
    </Container>
  );
}

export default Home;
