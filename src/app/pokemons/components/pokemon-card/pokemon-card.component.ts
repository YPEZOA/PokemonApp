import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: Pokemon

  constructor() { }

  ngOnInit(): void {

  }

  getColorForType(type: any[]) {
    return this.pokemon.types.filter(item => item.slot === 1)[0].type.name
  }

}
