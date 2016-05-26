/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component, Input} from "@angular/core";
import {Sistema} from "../models/sistema";
import {OnInit} from "@angular/core";
import {SistemaService} from "../services/sistema-service";
import {SistemaComponent} from "./sistema.component";

import { HTTP_PROVIDERS }    from '@angular/http';

@Component({
    selector: 'sistema-list',
    templateUrl: './app/sistema/components/sistema-list.html',
    directives: [SistemaComponent],
    providers: [
        SistemaService,
        HTTP_PROVIDERS
    ]
})
export class SistemaListComponent implements OnInit {

    private sistemaCount:number;
    private selectedSistema:Sistema;
    private sistemas: Sistema[] = [];
    private filteredSistemas: Sistema[] = [];
    private sistema: Sistema;

    constructor(private _sistemaService:SistemaService) {
     // _sistemaService.getSistemas().subscribe((sistemas:any[])  => {
     //     this.sistemas = this.filteredSistemas = sistemas;
     // });
     //   this.calculateSistemaCount();
    }

    /**
    * Listando sistemas
    */
    getSistemas() {
        this._sistemaService.getSistemas()
              .then( sistemas => {this.sistemas = sistemas; this.sistemaCount = sistemas.length; } );
    }

    /**
    * Editar pessoa
    * @param item: Array
    */
    editar(sistema:Sistema) {
        this.sistema = Object.assign({}, sistema);
        this.selectedSistema = Object.assign({}, sistema);
        $('#myModal').modal('show');
    }

    /**
    * Excluir pessoa
    * @param item: Array
    */
    excluir(sistema:Sistema) {
        if (confirm("Você tem certeza que deseja excluir?")) {
            this._sistemaService.excluir(sistema.id).then(res => {
                this.getSistemas();
            });
        }
    }

    ngOnInit() {
        this.getSistemas();
        this.sistema = new Sistema(1, "", "");
        this.selectedSistema = this.sistema;
        console.log("Sistema component initialized with " + this.sistemaCount + " sistemas.");
    }

    calculateSistemaCount() {
        this.sistemaCount = this.sistemas.length;
    }

    select(sistema:Sistema) {
        this.selectedSistema = sistema;
    }
}