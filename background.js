const apiUrl = "https://json.geoiplookup.io/"
const iconMappings = {
  "RU": "ru.png",
  "DE": "de.png",
  "NL": "nl.png"
}

const defaultIcon = "un.png"
const changeIcon = (jsonResponse) => {
  const countryCode = jsonResponse["country_code"]
  const newIcon = iconMappings[countryCode] || defaultIcon
  chrome.browserAction.setIcon({ path: "icons/" + newIcon })
}

setInterval(() => {
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(changeIcon);
}, 5000)