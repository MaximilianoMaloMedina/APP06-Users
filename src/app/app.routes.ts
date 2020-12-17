import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { SearchComponent } from './components/search/search.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const ROUTES: Routes = [
    {path: 'users/:id', component: UsersComponent},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'Usuarios', component: UsuariosComponent},
    {path: 'Formulario', component: FormularioComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];
