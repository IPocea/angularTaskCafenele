import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './pages/acasa/acasa.component';
import { CafeneaComponent } from './pages/cafenea/cafenea.component';
import { PaginaNuExistaComponent } from './pages/pagina-nu-exista/pagina-nu-exista.component';

const routes: Routes = [
  { path: 'acasa', component: AcasaComponent },
  { path: 'cafenea/:id', component: CafeneaComponent },
  { path: '', redirectTo: '/acasa', pathMatch: 'full' },
  { path: '**', component: PaginaNuExistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
