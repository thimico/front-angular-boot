/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Usuario} from "../models/usuario";
import {OnInit} from "@angular/core";
import {UsuarioService} from "../services/usuario-service";
import {UsuarioComponent} from "./usuario.component";

@Component({
    selector: 'usuario-list',
    templateUrl: './app/usuario/components/usuario-list.html',
    directives: [UsuarioComponent],
    providers: [UsuarioService]
})
export class UsuarioListComponent implements OnInit {

    usuarioCount:number;
    selectedUsuario:Usuario;
    usuarios: any[] = [];
    filteredUsuarios: any[] = [];

    constructor(private _usuarioService:UsuarioService) {
     _usuarioService.getUsuarios().subscribe((usuarios:any[])  => {
         this.usuarios = this.filteredUsuarios = usuarios;
     });
       this.calculateUsuarioCount();
    }

    ngOnInit() {

        console.log("Usuario component initialized with " + this.usuarios.length + " usuarios.");
    }

    calculateUsuarioCount() {
        this.usuarioCount = this.usuarios.length;
    }

    select(usuario:Usuario) {
        this.selectedUsuario = usuario;
    }
}