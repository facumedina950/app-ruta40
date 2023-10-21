import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { NorteComponent } from './views/norte/norte.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { CuyoComponent } from './views/cuyo/cuyo.component';
import { PatagoniaComponent } from './views/patagonia/patagonia.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaceCardComponent,
    NorteComponent,
    PrincipalComponent,
    CuyoComponent,
    PatagoniaComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
