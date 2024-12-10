// select HTML elements in the document
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=98c2451a5363857dc420578a07b7ecee';