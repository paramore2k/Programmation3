import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {
  @Input() description: string;
  @Input() nom: string;
  @Input() qteStock: number;



  constructor() { }

  ngOnInit(): void {
  }

}
