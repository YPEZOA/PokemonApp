import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ImageDefaultPipe } from './pipes/image-default.pipe';


@NgModule({
  declarations: [
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    PokemonCardComponent,
    ImageDefaultPipe,
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
