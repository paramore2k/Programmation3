import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Formulaire} from '../formulaire';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {
  @Input() description!: string;
  @Input() nom!: string;
  @Output() descriptionChange = new EventEmitter();
  @Output() nomChange = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }
  change({nouvelleValeur}: { nouvelleValeur: any }): void {
    this.descriptionChange.emit(nouvelleValeur);
    this.nomChange.emit(nouvelleValeur);
  }

}
