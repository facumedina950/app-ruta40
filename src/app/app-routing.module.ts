import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorteComponent } from './views/norte/norte.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { CuyoComponent } from './views/cuyo/cuyo.component';
import { PatagoniaComponent } from './views/patagonia/patagonia.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = [
{path:'index', component:PrincipalComponent},
{path:'norte', component:NorteComponent},
{path:'cuyo',component:CuyoComponent},
{path:'patagonia',component:PatagoniaComponent},
{path:'usuarios',component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
