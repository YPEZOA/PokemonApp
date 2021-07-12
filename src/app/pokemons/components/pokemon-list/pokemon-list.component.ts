import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { IPokemonSmall, Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  showLoading!: boolean;
  colorType: any

  constructor(private pokeService: PokemonsService) { }

  pokemons: Pokemon[] = []
  offset: number = 0
  limit: number = 40
  disabledButton = false

  ngOnInit(): void {
    this.getAllPokemons();
  }

  private getAllPokemons() {
    this.showLoading = true
    this.pokeService.allPokemon(this.limit, this.offset)
      .subscribe((resp: any) => {
        resp.results.forEach((pokemon: any) => this.getPokemonDetail(pokemon.name))

      })

  }

  private getPokemonDetail(name: string | number) {
    this.showLoading = true
    this.pokeService.pokemonInfo(name)
      .subscribe((resp: Pokemon) => {
        this.showLoading = false
        this.pokemons.push(resp)
        if (this.offset == 0) {
          this.disabledButton = true
        } else {
          this.disabledButton = false
        }
      })
  }

  getColorForType(types: any[]) {
    return types.filter(item => item.slot === 1)[0].type.name
  }

  onNextPage() {
    this.offset += 30
    this.pokemons = []
    this.getAllPokemons()
  }

  onPreviousPage() {

    this.offset -= 30
      this.pokemons = []
      this.getAllPokemons()
  }


}
