import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private apikey:string = "0a0f6424691a3eeba6d742d693390cb0";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor( private jsonp:Jsonp) { }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    console.log("urlPopulares",url);
  
    return this.jsonp.get(url).pipe(map( res=> res.json()));
  }

  getEnCartelera(){

    var desde = new Date();
    var hasta = new Date();

    hasta.setDate( hasta.getDate() + 14);

    var desdeStr = `${ desde.getFullYear()}-${ desde.getMonth()+1}-${ desde.getDay()}`
    var hastaStr = `${ hasta.getFullYear()}-${ hasta.getMonth()+1}-${ hasta.getDay()}`

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${ hastaStr }&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    console.log("urlGetCartelera",url);
    
    return this.jsonp.get(url).pipe(map( res=> res.json()))
  }

  getParaNiños(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map( res => res.json()))
  }

  getBuscarPelicula( texto:string)
  {
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .pipe(map( res=>{ 
                  this.peliculas = res.json().results;
                  console.log(this.peliculas);                 
                  return res.json().results;
                }));
  }

  getPelicula( id:string)
  {
    let url = `${ this.urlMoviedb}/movie/${ id }?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map( res => res.json()))
  }
}
