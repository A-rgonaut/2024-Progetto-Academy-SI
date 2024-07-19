import { Component } from '@angular/core';
import {CollaboratorComponent} from "../collaborator/collaborator.component";

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [CollaboratorComponent],
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.css'
})
export class CollaboratorsComponent {

}
