import { useState } from "react";

import "./App.css";
import "../WeatherCard/weathercard.css";
import Header from "../Header/Header";
import Main from "../Main/main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
