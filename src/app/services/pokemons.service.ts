import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pokemon } from '../pokemons/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  allPokemon(limit: number, offset: number) {

    return this.http.get<any>(`${environment.baseURL}?limit=${limit}&offset=${offset}`)
  }

  pokemonInfo(name: string | number) {
    return this.http.get<Pokemon>(`${environment.baseURL}/${name}`)
  }
}
