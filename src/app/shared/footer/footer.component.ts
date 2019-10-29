import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { Equipo } from '../../interfaces/equipo.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  data: InfoPagina;
  equipo: Equipo;

  constructor(public infoPag: InfoPaginaService) {}

  ngOnInit() {
    this.infoPag.requestDataFromMultipleSources().subscribe(responseList => {
      this.data = responseList[0];
      this.equipo = responseList[1];
  });
  }

}
