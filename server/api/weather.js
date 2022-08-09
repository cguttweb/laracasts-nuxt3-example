export default async (req, res) => {
  const weather = await $fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Ropley&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  return weather;
};
