export interface Coords {
  "lon": number,
  "lat": number
}

export interface Weather {
  "id": number,
  "main": "Clouds" | "Rain",
  "description": string,
  "icon": string
}

export interface CurrentDay {
  "coord": Coords,
  "weather": Weather[],
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
