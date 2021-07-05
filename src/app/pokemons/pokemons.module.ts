import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PaginatePipe } from './pipes/paginate.pipe';


@NgModule({
  declarations: [
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class PokemonsModule { }
