import { Component } from '@angular/core';
import {CoverComponent} from "../cover/cover.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carousel',
  standalone: true,
    imports: [
        CoverComponent,
        RouterLink
    ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
