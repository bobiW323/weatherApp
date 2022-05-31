import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./service/weather.service";
import {WeatherData} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherservice: WeatherService) {

  }

  weatherData?: WeatherData;
  city: string = 'Pittsburgh';

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  onSubmit() {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city:string) {
    this.weatherservice.getWeatherData(city).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response)
      }
    })
  }
}
