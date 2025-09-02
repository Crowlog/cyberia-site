const api_key = "9318e7b12a334a59ac2195049251108";
const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=Schwaz&aqi=no`;

const time_options = {
  timeZone: "Europe/Vienna",
  hour: "2-digit",
  minute: "2-digit",
};

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".det-tmp").textContent = `${data.current.temp_c}°`;
    document.querySelector(".wtr-ico").src = data.current.condition.icon;
    document.querySelector(".wtr-wnd").textContent = data.current.wind_kph;
    document.querySelector(".wtr-vis").textContent = data.current.vis_km;
    document.querySelector(".wtr-tme").textContent = new Date().toLocaleTimeString(
      "de-AT",
      time_options
    );
  })
  .catch((err) => console.error(err));

setInterval(() => {
  const now = new Date();
  document.querySelector(".wtr-tme").textContent = now.toLocaleTimeString("de-AT", time_options);
}, 10000);
