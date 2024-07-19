import { Component } from '@angular/core';
import {ScrollTopComponent} from "../scroll-top/scroll-top.component";
import {CopyrightComponent} from "../copyright/copyright.component";
import {LinksLanguageComponent} from "../links-language/links-language.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ScrollTopComponent,
    CopyrightComponent,
    LinksLanguageComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
