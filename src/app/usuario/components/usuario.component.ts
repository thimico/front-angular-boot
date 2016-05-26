/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Usuario} from "../models/usuario";
import {Output} from "@angular/core";
import {UsuarioService} from "../services/usuario-service";


@Component({
    selector: 'usuario',
    templateUrl: './app/usuario/components/usuario.html'
})
export class UsuarioComponent {
    @Input() usuario:Usuario;


  constructor(private _usuarioService:UsuarioService) {

  }



    /**
    * Cancelar Cadastro
    */
    cancelar() {
        $('#myModal').modal('hide');
    }

     /**
    * Salvar pessoa
    */
    salvar() {
        if (this.usuario.id) {
            this._usuarioService.editar(this.usuario).then(res => {
               $('#myModal').modal('hide');
            });
        }else {
            this._usuarioService.novo(this.usuario).then(res => {
                $('#myModal').modal('hide');
            });
        }
    }

}
