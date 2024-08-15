async function getGif(climate_condition) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=QekxzTEPMcNHKFH3eXPGGy94njaQE32Y&q=${climate_condition}`
    );
    const datas = await response.json();
    return datas.data[2].images.original.url;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export { getGif };
