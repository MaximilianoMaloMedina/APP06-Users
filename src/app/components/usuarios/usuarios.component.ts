import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario: any = [];

  constructor(private serviceService: ServiceService, private _router: Router) { 
  this.serviceService.getAllUsuarios().subscribe((data : any) => {
    this.usuario = data.data;
  });
  this.serviceService.getAllUsuarios2().subscribe((data : any) => {
    this.usuario = this.usuario.concat(data.data);
    console.log(this.usuario);
  });
}

navigate(id){
  this._router.navigate(['/user', id]);
}

ngOnInit(): void {
}
}
