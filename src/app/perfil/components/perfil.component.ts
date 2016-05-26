/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Perfil} from "../models/perfil";
import {Output} from "@angular/core";
import {PerfilService} from "../services/perfil-service";


@Component({
    selector: 'perfil',
    templateUrl: './app/perfil/components/perfil.html'
})
export class PerfilComponent {
    @Input() perfil:Perfil;


  constructor(private _perfilService:PerfilService) {

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
        if (this.perfil.id) {
            this._perfilService.editar(this.perfil).then(res => {
               $('#myModal').modal('hide');
            });
        }else {
            this._perfilService.novo(this.perfil).then(res => {
                $('#myModal').modal('hide');
            });
        }
    }
}

	