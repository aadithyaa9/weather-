async function getWeather() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london/today?unitGroup=us&include=current&key=WBJ8N28RSTEG4YKPQ3FFEUMBQ&contentType=json",
      { mode: "cors" }
    );
    const data = await response.json();
    return [
      data.currentConditions.temp,
      data.currentConditions.conditions,
      data.currentConditions.icon,
    ];
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export { getWeather };
