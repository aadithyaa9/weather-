async function getWeather(location,message) {
  message.textContent = "Loading...";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=current&key=WBJ8N28RSTEG4YKPQ3FFEUMBQ&contentType=json`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
    return [
      data.currentConditions.temp, 
      data.currentConditions.conditions,
      data.currentConditions.icon,
      data.days[0].description,
      data.resolvedAddress,
    ];
  } catch (error) {
    message.textContent = "Invalid Location";
    console.log(`Error: ${error}`);
  }
}

export { getWeather };
