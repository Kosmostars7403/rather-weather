export interface Coords {
  "lon": number,
  "lat": number
}

export interface CurrentDay {
  "coord": Coords,
  "weather": [
    {
      "id": number,
      "main": "Clouds",
      "description": string,
      "icon": string
    }
  ],
  "base": "stations",
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}
