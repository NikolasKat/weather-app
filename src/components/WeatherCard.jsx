import { memo } from "react";
import { BsWind, BsWater } from "react-icons/bs";
import {
   BsSunFill,
   BsCloudFill,
   BsFillCloudsFill,
   BsCloudRainFill,
   BsCloudSnowFill,
} from "react-icons/bs";

function WeatherCard({ city, windSpeed, icon, humidity, temp }) {
   const allIcons = [
      "01n",
      "02d",
      "02n",
      "03d",
      "03n",
      "04d",
      "04n",
      "09d",
      "09n",
      "10d",
      "10n",
      "13d",
      "13n",
   ];

   return (
      <div className="flex flex-col gap-52 items-center text-white text-9xl bg-violet-400 py-9 px-9 rounded-3xl mt-[50px] w-[440px] min-h-[500px]">
         <div className="flex justify-center flex-col items-center">
            <h2 className="text-7xl font-semibold text-center mt-8 mb-4">
               {temp}°c
            </h2>
            <h3 className="text-5xl text-center">{city}</h3>
         </div>
         <div className="flex justify-between text-2xl w-full">
            <div className="flex justify-between gap-3 items-center">
               <BsWater />
               <div>
                  <h4>{humidity} %</h4>
                  <h5 className="text-lg">Humidity</h5>
               </div>
            </div>
            <div className="flex justify-between gap-3 items-center">
               <BsWind />
               <div>
                  <h4>{windSpeed} Km/h</h4>
                  <h5 className="text-lg">Wind Speed</h5>
               </div>
            </div>
         </div>
      </div>
   );
}

export default memo(WeatherCard);
