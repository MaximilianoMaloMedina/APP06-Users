import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _router: ActivatedRoute, private serviceService: ServiceService) { }
  user: any = [];
  deleted: boolean = false;

  ngOnInit(): void {
    this._router.params.subscribe( params => {
      this.serviceService.getId(params['id']).subscribe( (data: any) => {
        this.user = data.data;
      } );
    });
  }
}
