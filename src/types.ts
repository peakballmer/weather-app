export interface WeatherData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    condition: {
      text: string;
    };
    temp_c: number;
  };
}