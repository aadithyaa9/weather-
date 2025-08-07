import { getWeather } from "./requests/weather";


const button = document.querySelector(".find-btn");
const input = document.querySelector("#search");
const message = document.querySelector(".message");
const weatherdiv = document.querySelector(".weather-data");
let inputlocation;
let weatherarray = [];

// Event Listener for button
button.addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check if the input value is empty
  if (input.value === "") {
    message.textContent = "Invalid Location";
  } else {
    inputlocation = input.value.trim();
    // Fetch the weather data and GIF
    try {
      weatherarray = await getWeather(inputlocation, message);
      

      // Clear the message and update the DOM with weather data
      message.textContent = "";
      input.value = ""; // Clear the input field

      // Convert temperature to Celsius for initial display
      const celsiusTemp = Math.round((weatherarray[0] - 32) * (5 / 9));

      // Set initial HTML for weather data with Celsius as default
      weatherdiv.innerHTML = `
        <div class="title-row">
          <h2>${weatherarray[4]}</h2>
          <button class="toggle">°F</button>
        </div>
        <div class="temp-row">
          <span class="temp">${celsiusTemp}<span class="super-script">°<sup>C</sup></span></span>
          <img class="icon" src="./icons/${weatherarray[2]}.svg" />
        </div>
        <div class="condition">
          <h3>${weatherarray[1]}</h3>
        </div>
        <div class="description">
          <p>${weatherarray[3]}</p>
        </div>`;

      // Get the toggle button and temperature span
      const togglebtn = document.querySelector(".toggle");
      const tempspan = document.querySelector(".temp");

      togglebtn.addEventListener("click", function () {
        togglebtn.classList.toggle("celsius");

        if (togglebtn.textContent === "°F") {
          // Convert to Fahrenheit
          tempspan.innerHTML = `
            ${Math.round(
              weatherarray[0]
            )}<span class="super-script">°<sup>F</sup></span>
          `;
          togglebtn.textContent = "°C"; // Update button text to show Celsius option
        } else {
          // Convert to Celsius
          tempspan.innerHTML = `
            ${celsiusTemp}<span class="super-script">°<sup>C</sup></span>
          `;
          togglebtn.textContent = "°F"; // Update button text to show Fahrenheit option
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      message.textContent = "Error fetching weather data.";
    }
  }
});
