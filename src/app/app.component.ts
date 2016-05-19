import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./todo/components/task-list.component";
import {UsuarioListComponent} from "./usuario/components/usuario-list.component";
import {AboutComponent} from "./about/components/about.components";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives: [TaskListComponent, UsuarioListComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
    {path: '/usuarios', component: UsuarioListComponent, as: 'UsuarioList'},
    {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}