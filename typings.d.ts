interface CurrentWeather{
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
}

interface Daily {
    apparent_temperature_max: [number];
    apparent_temperature_min: [number];
    precipitation_sum: [number];
    rain_sum: [number];
    sunrise: [string];
    sunset: [string];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    uv_index_clear_sky_max: [number];
    uv_index_max: [number];
    weathercode: [number];
  }

interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_sum: string;
    rain_sum: string;
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weathercode: string;
}
  
interface Hourly {
    apparent_temperature: [number]
    is_day: [number]
    rain: [number]
    relativehumidity_2m: [number]
    shortwave_radiation: [number]
    showers: [number]
    snowfall: [number]
    temperature_2m: [number]
    time: [string]
    uv_index: [number]
    visibility: [number]
    weathercode: [number]
    windspeed_10m: [number]
}
  
interface HourlyUnits {
    apparent_temperature: string;
    is_day: string;
    rain: string;
    relativehumidity_2m: string;
    shortwave_radiation: string;
    showers: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    visibility: string;
    weathercode: string;
    windspeed_10m: string;
}
  
interface Root {
    current_weather: CurrentWeather;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}