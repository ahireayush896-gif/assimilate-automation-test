import { WeatherData, CitySuggestion } from '../types/weather';

export const POPULAR_CITIES: CitySuggestion[] = [
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503 },
  { name: 'New York', country: 'United States', state: 'NY', lat: 40.7128, lon: -74.006 },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278 },
  { name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522 },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093 },
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lon: 55.2708 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'Berlin', country: 'Germany', lat: 52.52, lon: 13.405 },
];

const MOCK_WEATHER_DATABASE: Record<string, WeatherData> = {
  tokyo: {
    city: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lon: 139.6503,
    temp: 19,
    feelsLike: 18,
    tempMin: 14,
    tempMax: 22,
    humidity: 62,
    windSpeed: 12,
    windDirection: 'ENE',
    pressure: 1014,
    visibility: 10,
    uvIndex: 5,
    condition: 'Clear',
    conditionText: 'Sunny with high clouds',
    aqi: 32,
    aqiStatus: 'Good',
    sunrise: '05:42 AM',
    sunset: '05:58 PM',
    hourly: [
      { time: 'Now', temp: 19, condition: 'Clear', pop: 0 },
      { time: '12:00', temp: 21, condition: 'Clear', pop: 0 },
      { time: '15:00', temp: 22, condition: 'Cloudy', pop: 10 },
      { time: '18:00', temp: 18, condition: 'Clear', pop: 0 },
      { time: '21:00', temp: 16, condition: 'Clear', pop: 5 },
      { time: '00:00', temp: 15, condition: 'Clear', pop: 0 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 28', tempMax: 22, tempMin: 14, condition: 'Clear', conditionText: 'Sunny', pop: 0 },
      { day: 'Tue', date: 'Oct 29', tempMax: 21, tempMin: 15, condition: 'Clouds', conditionText: 'Partly Cloudy', pop: 15 },
      { day: 'Wed', date: 'Oct 30', tempMax: 18, tempMin: 12, condition: 'Rain', conditionText: 'Light Rain', pop: 70 },
      { day: 'Thu', date: 'Oct 31', tempMax: 20, tempMin: 13, condition: 'Clear', conditionText: 'Sunny', pop: 10 },
      { day: 'Fri', date: 'Nov 01', tempMax: 23, tempMin: 16, condition: 'Clear', conditionText: 'Clear sky', pop: 5 },
      { day: 'Sat', date: 'Nov 02', tempMax: 22, tempMin: 15, condition: 'Clouds', conditionText: 'Overcast', pop: 20 },
      { day: 'Sun', date: 'Nov 03', tempMax: 19, tempMin: 13, condition: 'Rain', conditionText: 'Showers', pop: 60 },
    ],
  },
  'new york': {
    city: 'New York',
    country: 'United States',
    lat: 40.7128,
    lon: -74.006,
    temp: 14,
    feelsLike: 12,
    tempMin: 9,
    tempMax: 17,
    humidity: 71,
    windSpeed: 21,
    windDirection: 'NW',
    pressure: 1009,
    visibility: 9,
    uvIndex: 4,
    condition: 'Clouds',
    conditionText: 'Partly Cloudy & Breezy',
    aqi: 45,
    aqiStatus: 'Good',
    sunrise: '06:21 AM',
    sunset: '05:44 PM',
    hourly: [
      { time: 'Now', temp: 14, condition: 'Clouds', pop: 10 },
      { time: '12:00', temp: 16, condition: 'Clouds', pop: 15 },
      { time: '15:00', temp: 17, condition: 'Clear', pop: 10 },
      { time: '18:00', temp: 13, condition: 'Clear', pop: 5 },
      { time: '21:00', temp: 11, condition: 'Clear', pop: 0 },
      { time: '00:00', temp: 10, condition: 'Clear', pop: 0 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 28', tempMax: 17, tempMin: 9, condition: 'Clouds', conditionText: 'Partly Cloudy', pop: 10 },
      { day: 'Tue', date: 'Oct 29', tempMax: 18, tempMin: 11, condition: 'Clear', conditionText: 'Sunny', pop: 0 },
      { day: 'Wed', date: 'Oct 30', tempMax: 20, tempMin: 14, condition: 'Clear', conditionText: 'Sunny & Mild', pop: 0 },
      { day: 'Thu', date: 'Oct 31', tempMax: 22, tempMin: 15, condition: 'Rain', conditionText: 'Evening Rain', pop: 80 },
      { day: 'Fri', date: 'Nov 01', tempMax: 15, tempMin: 8, condition: 'Clouds', conditionText: 'Cool & Windy', pop: 25 },
      { day: 'Sat', date: 'Nov 02', tempMax: 14, tempMin: 7, condition: 'Clear', conditionText: 'Crisp & Clear', pop: 0 },
      { day: 'Sun', date: 'Nov 03', tempMax: 16, tempMin: 9, condition: 'Clouds', conditionText: 'Passing Clouds', pop: 10 },
    ],
  },
  london: {
    city: 'London',
    country: 'United Kingdom',
    lat: 51.5074,
    lon: -0.1278,
    temp: 11,
    feelsLike: 9,
    tempMin: 7,
    tempMax: 13,
    humidity: 84,
    windSpeed: 16,
    windDirection: 'SW',
    pressure: 1018,
    visibility: 8,
    uvIndex: 2,
    condition: 'Rain',
    conditionText: 'Drizzle & Light Mist',
    aqi: 22,
    aqiStatus: 'Excellent',
    sunrise: '06:48 AM',
    sunset: '04:41 PM',
    hourly: [
      { time: 'Now', temp: 11, condition: 'Rain', pop: 85 },
      { time: '12:00', temp: 12, condition: 'Rain', pop: 70 },
      { time: '15:00', temp: 13, condition: 'Clouds', pop: 40 },
      { time: '18:00', temp: 10, condition: 'Clouds', pop: 20 },
      { time: '21:00', temp: 9, condition: 'Clear', pop: 10 },
      { time: '00:00', temp: 8, condition: 'Clouds', pop: 15 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 28', tempMax: 13, tempMin: 7, condition: 'Rain', conditionText: 'Light Drizzle', pop: 85 },
      { day: 'Tue', date: 'Oct 29', tempMax: 14, tempMin: 8, condition: 'Clouds', conditionText: 'Overcast', pop: 30 },
      { day: 'Wed', date: 'Oct 30', tempMax: 13, tempMin: 9, condition: 'Rain', conditionText: 'Scattered Showers', pop: 65 },
      { day: 'Thu', date: 'Oct 31', tempMax: 12, tempMin: 6, condition: 'Clear', conditionText: 'Partly Sunny', pop: 20 },
      { day: 'Fri', date: 'Nov 01', tempMax: 11, tempMin: 5, condition: 'Clouds', conditionText: 'Cloudy', pop: 25 },
      { day: 'Sat', date: 'Nov 02', tempMax: 12, tempMin: 6, condition: 'Rain', conditionText: 'Rain Periods', pop: 75 },
      { day: 'Sun', date: 'Nov 03', tempMax: 10, tempMin: 4, condition: 'Clear', conditionText: 'Clear Sky', pop: 10 },
    ],
  },
};

export async function fetchWeatherData(query: string): Promise<WeatherData> {
  // Simulate network delay for smooth UI loading state feel
  await new Promise((res) => setTimeout(res, 400));

  const key = query.trim().toLowerCase();
  if (MOCK_WEATHER_DATABASE[key]) {
    return MOCK_WEATHER_DATABASE[key];
  }

  // Generate realistic dynamic fallback weather for search queries
  const hash = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const baseTemp = (hash % 25) + 5; // 5C to 30C
  const conditions = ['Clear', 'Clouds', 'Rain', 'Thunderstorm', 'Snow'];
  const condition = conditions[hash % conditions.length];

  return {
    city: query.charAt(0).toUpperCase() + query.slice(1),
    country: 'International',
    lat: Number((hash % 90).toFixed(2)),
    lon: Number(((hash * 2) % 180 - 90).toFixed(2)),
    temp: baseTemp,
    feelsLike: baseTemp - 2,
    tempMin: baseTemp - 4,
    tempMax: baseTemp + 5,
    humidity: (hash % 40) + 50,
    windSpeed: (hash % 20) + 5,
    windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][hash % 8],
    pressure: 1005 + (hash % 20),
    visibility: 10,
    uvIndex: (hash % 8) + 1,
    condition: condition,
    conditionText: `Moderate ${condition.toLowerCase()} conditions`,
    aqi: (hash % 60) + 15,
    aqiStatus: (hash % 60) < 40 ? 'Good' : 'Moderate',
    sunrise: '06:15 AM',
    sunset: '06:30 PM',
    hourly: [
      { time: 'Now', temp: baseTemp, condition: condition, pop: 10 },
      { time: '12:00', temp: baseTemp + 2, condition: condition, pop: 20 },
      { time: '15:00', temp: baseTemp + 3, condition: condition, pop: 15 },
      { time: '18:00', temp: baseTemp - 1, condition: condition, pop: 5 },
      { time: '21:00', temp: baseTemp - 3, condition: condition, pop: 0 },
      { time: '00:00', temp: baseTemp - 4, condition: condition, pop: 0 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 28', tempMax: baseTemp + 5, tempMin: baseTemp - 4, condition, conditionText: condition, pop: 20 },
      { day: 'Tue', date: 'Oct 29', tempMax: baseTemp + 4, tempMin: baseTemp - 3, condition: 'Clear', conditionText: 'Sunny', pop: 0 },
      { day: 'Wed', date: 'Oct 30', tempMax: baseTemp + 2, tempMin: baseTemp - 5, condition: 'Clouds', conditionText: 'Cloudy', pop: 30 },
      { day: 'Thu', date: 'Oct 31', tempMax: baseTemp + 6, tempMin: baseTemp - 2, condition: 'Clear', conditionText: 'Clear Sky', pop: 10 },
      { day: 'Fri', date: 'Nov 01', tempMax: baseTemp + 3, tempMin: baseTemp - 4, condition: 'Rain', conditionText: 'Rain', pop: 70 },
      { day: 'Sat', date: 'Nov 02', tempMax: baseTemp + 1, tempMin: baseTemp - 6, condition: 'Clouds', conditionText: 'Overcast', pop: 40 },
      { day: 'Sun', date: 'Nov 03', tempMax: baseTemp + 4, tempMin: baseTemp - 3, condition: 'Clear', conditionText: 'Sunny', pop: 5 },
    ],
  };
}

export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}
