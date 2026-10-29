export interface WeatherData {
  city: string;
  country: string;
  coord: { lat: number; lon: number };
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  uvIndex: number;
  visibility: number;
  dewPoint: number;
  conditionCode: number;
  conditionText: string;
  description: string;
  icon: string;
  sunrise: string;
  sunset: string;
  airQuality: {
    aqi: number; // 1-5
    pm25: number;
    pm10: number;
    o3: number;
    no2: number;
  };
}

export interface HourlyForecast {
  time: string;
  temp: number;
  pop: number; // Probability of precipitation 0-100%
  conditionCode: number;
  conditionText: string;
  icon: string;
}

export interface DailyForecast {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  pop: number;
  conditionCode: number;
  conditionText: string;
  icon: string;
  description: string;
}

export interface SavedLocation {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  temp?: number;
  conditionText?: string;
}

export type TemperatureUnit = 'C' | 'F';
