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
  nextPage: string = ''
  previousPage: string = ''
  offset: number = 0
  limit: number = 40

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.showLoading = true
    this.pokeService.allPokemon(this.limit, this.offset)
      .subscribe((resp: any) => {
        resp.results.forEach((pokemon: any) => this.getPokemonDetail(pokemon.name))
        this.nextPage = resp.next
        this.previousPage = resp.previous
      })
  }

  getPokemonDetail(name: string | number) {
    this.showLoading = true
    this.pokeService.pokemonInfo(name)
      .subscribe((resp: Pokemon) => {
        this.showLoading = false
        this.pokemons.push(resp)
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
