import { Component } from '@angular/core';
import { Formulaire} from './formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description = '';
  title = 'simple-input-output';
}
