const request = require('postman-request')

const forecast = (lat, lon, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=94538c833139ba30514b2d45c6b76363&query=' + encodeURIComponent(lat + ',' + lon) + '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather forecast.', undefined)
    } else if (body.error) {
      callback('Unable to find location for weather forecast. Please try again.', undefined)
    } else {
      callback(undefined, 'In ' + body.location.name + ', ' + body.location.region + ' the weather is currently ' + body.current.weather_descriptions[0] + '. The temperature is ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
    }
  })
}

module.exports = forecast
