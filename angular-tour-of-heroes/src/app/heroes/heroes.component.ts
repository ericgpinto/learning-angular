import { HEROES } from './mock-heroes';
import { Hero } from './Hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  selectedHero?:Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}