import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/slice";
import { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";

export default function Form() {
   const [city, setCity] = useState("");
   const data = useSelector((state) => state.weather.weatherData);

   const dispatch = useDispatch();

   return (
      <div className="flex justify-center gap-8 mt-8">
         <input
            className="p-3 rounded-3xl text-3xl font-semibold"
            type="text"
            placeholder="country, city and others"
            value={city}
            onChange={(e) => setCity(e.target.value)}
         />
         <button
            onClick={async () => {
               await dispatch(fetchWeather(city));
            }}
            className="p-4 rounded-3xl text-3xl font-semibold text-black"
         >
            <BsSearch />
         </button>
      </div>
   );
}
