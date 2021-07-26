let weather = {
     apiKey: "73d7a52ff917b3129031a62c0234e8eb",
     fetchWeather: function (city) {
          fetch(
               "http://api.openweathermap.org/data/2.5/weather?q= " 
               + city 
               + "&units=metric&appid= " 
               + this.apiKey
          )
               .then((response) => response.json())
               .then((data) => console.log(data));
     },
     displayWeather: function(data) {
          const { name } = {data};
          const { icon, description } = data.weather;


     }
};

