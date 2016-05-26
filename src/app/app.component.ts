import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';

import {TaskListComponent} from "./todo/components/task-list.component";
import {UsuarioListComponent} from "./usuario/components/usuario-list.component";
import {SistemaListComponent} from "./sistema/components/sistema-list.component";
import {PerfilListComponent} from "./perfil/components/perfil-list.component";
import {AboutComponent} from "./about/components/about.components";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives: [TaskListComponent, UsuarioListComponent, PerfilListComponent, SistemaListComponent, AboutComponent,
        RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
    {path: '/usuarios', component: UsuarioListComponent, as: 'UsuarioList'},
    {path: '/perfils', component: PerfilListComponent, as: 'PerfilList'},
    {path: '/sistemas', component: SistemaListComponent, as: 'SistemaList'},
    {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}