import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ForecastCardComponent} from "../forecast-card/forecast-card.component";
import {ForecastService} from "../../services/ForecastService/forecast.service";
import {ForecastDto} from "../../model/ForecastDto";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    NgForOf,
    ForecastCardComponent,
    NgClass,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent implements OnInit{

  today : ForecastDto = new ForecastDto;
  data : ForecastDto[] = new Array<ForecastDto>();
  location : string = "";

  constructor(private forecastService : ForecastService, private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('location'))
      this.forecastService.getWeeklyForecast(localStorage.getItem('location')).subscribe(result => {
        console.log(result);

        result.forEach(element => {
          if(result.indexOf(element) === 0)
            this.today = element;
          else
            this.data.push(element);
        })

      })
  }

  submit(){

    console.log(this.location);

    localStorage.setItem('location', this.location);

    this.data.splice(0,this.data.length);

    this.forecastService.getWeeklyForecast(localStorage.getItem('location')).subscribe(result => {
      console.log(result);

      result.forEach(element => {
        if (result.indexOf(element) === 0)
          this.today = element;
        else
          this.data.push(element);
      })
    })
  }

}
