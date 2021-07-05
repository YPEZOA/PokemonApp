import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

@Input()  pokemon!: Pokemon

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id')
    this.http.get(`${environment.baseURL}/${pokemonId}`)
      .subscribe((resp: any) => {
        this.pokemon = resp
      })
  }

}
