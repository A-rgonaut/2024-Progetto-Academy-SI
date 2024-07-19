import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ForecastDto} from "../../model/ForecastDto";

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.css'
})
export class ForecastCardComponent {

  @Input() item !: ForecastDto
  protected readonly localStorage = localStorage;
}
