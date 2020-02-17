import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './src-components/weather.components';
import From from './src-components/From.Components';

const API_KEY = "19c5c13b42207582272b717ce991a660"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: '',
      icon: '',
      main: '',
      celsius: '',
      temp_max: '',
      temp_min: '',
      description: '',
      error: false
    }

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }
  calCelsius(temp) {
    return Math.floor(temp - 273.15);
  }
  getWeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm })
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle })
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain })
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow })
        break;
      case rangeId >= 700 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere })
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear })
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds })
        break;
    }


  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if (city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
      const response = await api_call.json();

      console.log(response);

      this.setState({
        city:`${response.name},${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_min: this.calCelsius(response.main.temp_min),
        temp_max: this.calCelsius(response.main.temp_max),
        description: response.weather[0].description
      })

      this.getWeatherIcon(this.weatherIcon, response.weather[0].id)
    }
    else {
      this.setState({error:true})
    }
  }
  render() {
    return (
      <div className="App">
        <From loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          celsius={this.state.celsius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    )
  }
}

export default App;
