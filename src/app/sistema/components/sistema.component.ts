/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Sistema} from "../models/sistema";
import {Output} from "@angular/core";

import {SistemaService} from "../services/sistema-service";

@Component({
    selector: 'sistema',
    templateUrl: './app/sistema/components/sistema.html'
})
export class SistemaComponent {
    @Input() sistema:Sistema;



  constructor(private _sistemaService:SistemaService) {

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
        if (this.sistema.id) {
            this._sistemaService.editar(this.sistema).then(res => {
               $('#myModal').modal('hide');
            });
        }else {
            this._sistemaService.novo(this.sistema).then(res => {
                $('#myModal').modal('hide');
            });
        }
    }
}
