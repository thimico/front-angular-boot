/**
 * Created by thiago.oliveira on 19/05/2016.
 */

import {Component, Input} from "@angular/core";
import {Perfil} from "../models/perfil";
import {OnInit} from "@angular/core";
import {PerfilService} from "../services/perfil-service";
import {SistemaService} from "../../sistema/services/sistema-service";
import {PerfilComponent} from "./perfil.component";
import { HTTP_PROVIDERS }    from '@angular/http';
import {Sistema} from "../../sistema/models/sistema";


@Component({
    selector: 'perfil-list',
    templateUrl: './app/perfil/components/perfil-list.html',
    directives: [PerfilComponent],
    providers: [
        PerfilService,
        SistemaService,
        HTTP_PROVIDERS
    ]
})
export class PerfilListComponent implements OnInit {

    private perfilCount:number;
    private selectedPerfil:Perfil;
    private perfils: Perfil[] = [];
    private filteredPerfils: Perfil[] = [];
    private perfil: Perfil;

    constructor(private _perfilService:PerfilService) {
     // _perfilService.getPerfils().subscribe((perfils:any[])  => {
     //     this.perfils = this.filteredPerfils = perfils;
     // });
     //   this.calculatePerfilCount();
    }

    /**
    * Listando perfils
    */
    getPerfils() {
        this._perfilService.getPerfils()
              .then( perfils => {this.perfils = perfils; } );
    }

    /**
    * Editar pessoa
    * @param item: Array
    */
    editar(perfil:Perfil) {
        this.perfil = Object.assign({}, perfil);
        this.selectedPerfil = Object.assign({}, perfil);
        $('#myModal').modal('show');
    }

    /**
    * Excluir pessoa
    * @param item: Array
    */
    excluir(perfil:Perfil) {
        if (confirm("Você tem certeza que deseja excluir?")) {
            this._perfilService.excluir(perfil.id)
                .then(Router.renavigate());
        }
    }

    ngOnInit() {
        this.getPerfils();
        this.perfil = new Perfil(null, "", "", null);
        this.selectedPerfil = this.perfil;
        console.log("Perfil component initialized with " + this.perfils.length + " perfils.");
    }

    calculatePerfilCount() {
        this.perfilCount = this.perfils.length;

    }

    select(perfil:Perfil) {
        this.selectedPerfil = perfil;
    }

    ngOnChanges(changes) {
        this.getPerfils();
        this.perfil = new Perfil(null, "", "", null);
        this.selectedPerfil = this.perfil;
        console.log("Perfil component initialized with " + this.perfils.length + " perfils.");
    }

}