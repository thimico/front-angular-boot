/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {OnInit} from "@angular/core";
import {Perfil} from "../models/perfil";
import {Output} from "@angular/core";

import {PerfilService} from "../services/perfil-service";
import {SistemaService} from "../../sistema/services/sistema-service";
import {Sistema} from "../../sistema/models/sistema";

@Component({
    selector: 'perfil',
    templateUrl: './app/perfil/components/perfil.html'
})
export class PerfilComponent implements OnInit {
    @Input() perfil:Perfil;
    private filteredSistemas: Sistema[] = [];
    private selectedSistema : Sistema;

  constructor(private _perfilService:PerfilService, private _sistemaService:SistemaService) {

  }

    ngOnInit() {
        this._sistemaService.getSistemas()
            .then( sistemas => {this.filteredSistemas = sistemas; } );
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
            this.perfil.sistema = Object.assign({}, this.selectedSistema);
            this._perfilService.editar(this.perfil).then(res => {
               $('#myModal').modal('hide');
                this._perfilService.getPerfils();
            });
        }else {
            this.perfil.sistema = Object.assign({}, this.selectedSistema);
            this._perfilService.novo(this.perfil).then(res => {
                $('#myModal').modal('hide');
                this._perfilService.getPerfils();
            });
        }
    }
}