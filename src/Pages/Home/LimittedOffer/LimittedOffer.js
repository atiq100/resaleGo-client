import React, { useEffect, useState } from "react";
import image from "../../../assets/images/helmetbanner.png";

const LimittedOffer = () => {
  
    const [counter, setCounter] =useState(60);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center mx-8 h-[510px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-wrap gap-4 items-center justify-around justify-items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden ">
          
         
          <div className=" text-white text-center mt-20 mr-96">
            <h2 className="text-4xl font-bold">Limitted Offer Get Your <br></br>helmet</h2>
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-20">
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdow font-mono text-5xl">
      <span value={counter}>{counter}</span>
    </span>
    sec
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default LimittedOffer;
