import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  data: any;
  equipo: any;
  cargada = false;

  constructor(public httpClient: HttpClient) {
    console.log('Servicio de info para la pagina');
  }

  public requestDataFromMultipleSources(): Observable<any[]> {
    if (!this.cargada) {
      this.data = this.httpClient.get('assets/data/data-pagina.json');
      this.equipo = this.httpClient.get('https://angular-html-d5edd.firebaseio.com/equipo.json');
      this.cargada = true;
     }
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([this.data, this.equipo]);
  }

}
