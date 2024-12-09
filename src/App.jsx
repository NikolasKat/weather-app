import { useSelector } from "react-redux";

import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";

function App() {
   const data = useSelector((state) => state.weather.weatherData);

   return (
      <>
         <section className="flex flex-col items-center">
            <h1 className="flex justify-center font-bold mt-7">
               MY WEATHER APP!
            </h1>
            <Form />
            {data ? (
               <WeatherCard
                  city={data.name}
                  windSpeed={data.wind.speed}
                  icon={data.weather.icon}
                  humidity={data.main.humidity}
                  temp={data.main.temp}
               />
            ) : (
               "Nope"
            )}
         </section>
      </>
   );
}

export default App;
