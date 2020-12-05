import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {TABHEROS} from '../mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  tabObjets: Hero[] = TABHEROS;
  breakpoint: number;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
