import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Servicios
import { PeliculasService } from './services/peliculas.service';

//Rutas
import { APP_ROUTING } from './app.routes';

//Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    JsonpModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
