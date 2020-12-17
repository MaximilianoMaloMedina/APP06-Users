import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(private serviceService: ServiceService) { }

  resultados: any = [];
  buscando: boolean = true;
  error: boolean;
  
  ngOnInit(): void {
  }
  
    buscar(id){
      if (id === ''){
        this.buscando = true;
        this.error = false;
        return this.resultados = [];
      }
      this.serviceService.getId(id).subscribe((data: any) => {
              this.resultados = data.data;
              this.buscando = false;
              this.error = false;
            }, (error: any) => {
              this.buscando = false;
              this.error = true;
            });
            }

}

