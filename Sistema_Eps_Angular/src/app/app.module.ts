
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';

// Modulo
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ListPersonasComponent,
    AgregarEditarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
