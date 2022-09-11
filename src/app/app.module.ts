import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcasaComponent } from './pages/acasa/acasa.component';
import { PaginaNuExistaComponent } from './pages/pagina-nu-exista/pagina-nu-exista.component';
import { ListaLocalitatiComponent } from './components/lista-localitati/lista-localitati.component';
import { CafeneaComponent } from './pages/cafenea/cafenea.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaCafeleComponent } from './components/lista-cafele/lista-cafele.component';

@NgModule({
  declarations: [
    AppComponent,
    AcasaComponent,
    PaginaNuExistaComponent,
    ListaLocalitatiComponent,
    CafeneaComponent,
    HeaderComponent,
    FooterComponent,
    ListaCafeleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
