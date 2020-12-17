import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllUsuarios(){
    return this.http.get('https://reqres.in/api/users');
  }

  getAllUsuarios2(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getId(id){
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
  
  deleteUser(id){
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }

  addUser(data: any){
    return this.http.post('https://reqres.in/api/users', data);
  }
}