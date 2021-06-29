import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = []
  showLoading!: boolean;
  colorType: string = ''

  constructor(private pokeService: PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.showLoading = true
    this.pokeService.allPokemon()
      .subscribe((resp: any) => {
        console.log(resp);
          resp.results.forEach((pokemon: any) => {
            this.pokeService.pokemonInfo(pokemon.name)
              .subscribe( result => {
                result.types.filter(pok => pok.slot == 1)
                  
                  
                  // switch (pokemon.type.name) {
                  //   case 'bug':
                  //     this.colorType = 'bug'
                  //     break;
                  //   case 'fire':
                  //     this.colorType = 'fire'
                  //     break;
                  //   case 'electric':
                  //     this.colorType = 'yellow'
                  //     break;
                  //   default:
                  //     break;
                  // }
                  this.pokemons.push(result)
                  this.showLoading = false
                })
              })
          })
      })
  }

}
