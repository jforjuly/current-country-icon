const apiUrl = "https://json.geoiplookup.io/";
const iconMappings = {
  RU: "ru.png",
  DE: "de.png",
  NL: "nl.png",
};
const defaultIcon = "un.png";
const iconsFolder = "icons";
const changeIcon = (jsonResponse) => {
  const countryCode = jsonResponse["country_code"];
  const newIcon = iconMappings[countryCode] || defaultIcon;
  chrome.browserAction.setIcon({ path: iconsFolder + "/" + newIcon });
};

const interval = 1000;
const updater = () => {
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(changeIcon);
};
setInterval(updater, interval);
