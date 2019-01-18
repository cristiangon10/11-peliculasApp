import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresar:string = "";

  constructor(public _ps:PeliculasService,public route:ActivatedRoute) 
  {
    this.route.params.subscribe( parametros=>{

    console.log(parametros);
    this.regresar = parametros['pag'];

    this._ps.getPelicula( parametros['id'])
    .subscribe( pelicula => this.pelicula = pelicula)
    }) 
  }
  
  ngOnInit() {
  }
}
