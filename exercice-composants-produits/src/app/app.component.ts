import { Component } from '@angular/core';
import {Produit} from './produit';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produit: Produit = {
    id: '1',
    nom: 'Un produit',
    prix: 4,
    description: 'Description du premier produit',
    qteStock: 0
  };
  produit2: Produit = {
    id: '2',
    nom: 'Un second produit',
    prix: 8,
    description: 'Description du second produit',
    qteStock: 3
  };
  produit3: Produit = {
    id: '3',
    nom: 'Mon troisième produit',
    prix: 20,
    description: 'Ceci est le 3e produit',
    qteStock: 10
  };

  title: 'exercice-composants-produits';
}
