import { InfoPaginaService } from './services/info-pagina.service';
import { Component } from '@angular/core';
import { InfoPagina } from './interfaces/info-pagina.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  data: InfoPagina;

  constructor(private infoPaginaService: InfoPaginaService) {
    this.data = infoPaginaService.data;
  }

}
