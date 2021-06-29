import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPokemonSmall, Pokemon } from '../pokemons/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  allPokemon() {
    return this.http.get<IPokemonSmall[]>(`${environment.baseURL}?limit=100`)
  }

  pokemonInfo(name: string | number) {
    return this.http.get<Pokemon>(`${environment.baseURL}/${name}`)
  }
}
