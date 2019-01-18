import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image: string = '../assets/cine.jpg';

  cartelera:any;
  populares: any;
  infantiles: any;

  constructor( public _ps: PeliculasService) { 
    
    this._ps.getPopulares()
    .subscribe( data =>{
      // console.log(data);
      this.populares = data.results;
      console.log(this.populares);
      
    })
    

    this._ps.getEnCartelera()
    .subscribe( data =>{
      // console.log(data); 
      this.cartelera = data.results;
      console.log(this.cartelera);
    })
  

    this._ps.getParaNiños()
    .subscribe( data =>{
      this.infantiles = data.results;
      console.log(this.infantiles);
    })
      
  }

  ngOnInit() {
  }

}
