/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component, Input} from "@angular/core";
import {Usuario} from "../models/usuario";
import {OnInit} from "@angular/core";
import {UsuarioService} from "../services/usuario-service";
import {UsuarioComponent} from "./usuario.component";
import { HTTP_PROVIDERS }    from '@angular/http';

@Component({
    selector: 'usuario-list',
    templateUrl: './app/usuario/components/usuario-list.html',
    directives: [UsuarioComponent],
    providers: [
        UsuarioService,
        HTTP_PROVIDERS
    ]
})
export class UsuarioListComponent implements OnInit {

    private usuarioCount:number;
    private selectedUsuario:Usuario;
    private usuarios: Usuario[] = [];
    private filteredUsuarios: Usuario[] = [];
    private usuario: Usuario;

    constructor(private _usuarioService:UsuarioService) {
     // _usuarioService.getUsuarios().subscribe((usuarios:any[])  => {
     //     this.usuarios = this.filteredUsuarios = usuarios;
     // });
     //   this.calculateUsuarioCount();
    }

    /**
    * Listando usuarios
    */
    getUsuarios() {
        this._usuarioService.getUsuarios()
              .then( usuarios => {
                  this.usuarios = usuarios;
              });
    }

    /**
    * Editar pessoa
    * @param item: Array
    */
    editar(usuario:Usuario) {
        this.usuario = Object.assign({}, usuario);
        this.selectedUsuario = Object.assign({}, usuario);
        $('#myModal').modal('show');
    }

    /**
    * Excluir pessoa
    * @param item: Array
    */
    excluir(usuario:Usuario) {
        if (confirm("Você tem certeza que deseja excluir?")) {
            this._usuarioService.excluir(usuario.id).then(res => {
                this.getUsuarios();
            });
        }
    }

    abrirDialogNovo() {
        this.usuario = new Usuario(null, "", "", "", "", "", "", "", new Date());
        this.selectedUsuario = this.usuario;
    }

    ngOnInit() {
        this.getUsuarios();
        this.usuario = new Usuario(null, "", "", "", "", "", "", "", new Date());
        this.selectedUsuario = this.usuario;
        console.log("Usuario component initialized with " + this.usuarioCount + " usuarios.");
    }

    calculateUsuarioCount() {
        this.usuarioCount = this.usuarios.length;
    }

    select(usuario:Usuario) {
        this.selectedUsuario = usuario;
    }
}