import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar: string = "";

  constructor( public _ps:PeliculasService,
               private route:Router,
               public routed:ActivatedRoute) {

                 this.routed.params.subscribe( parametros =>{
                   console.log(parametros);
                   if (parametros['texto'])
                   {
                     this.buscar = parametros['texto'];
                     this.buscarPelicula();
                   }
                   
                 })
                }

  buscarPelicula(){
    if (this.buscar.length === 0)
    {
      return;
    }

    this._ps.getBuscarPelicula(this.buscar).subscribe()
  }


  ngOnInit() {
  }

}
