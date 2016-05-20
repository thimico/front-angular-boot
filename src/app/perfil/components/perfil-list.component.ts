/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {FormBuilder, Validators} from '@angular/common';
import {Perfil} from "../models/perfil";
import {OnInit} from "@angular/core";
import {PerfilService} from "../services/perfil-service";
import {PerfilComponent} from "./perfil.component";
import { Observable }       from 'rxjs/Observable';

@Component({
    selector: 'perfil-list',
    templateUrl: './app/perfil/components/perfil-list.html',
    directives: [PerfilComponent],
    providers: [PerfilService]
})
export class PerfilListComponent implements OnInit {
    perfils: Observable<Perfil[]>;
    errorMessage: string;
    perfilCount:number;
    selectedPerfil:Perfil;
    // perfils: any[] = [];
    filteredPerfils: any[] = [];

    constructor(private _perfilService:PerfilService) {

    }

    ngOnInit() {
        this.perfils = this._perfilService.perfils$;
        this._perfilService.loadPerfils();
        // this.perfils =   this.getPerfils();
       this.calculatePerfilCount();
        console.log("Perfil component initialized with " + this.perfils + " perfils.");
    }

    calculatePerfilCount() {
        this.perfilCount = this.perfils.toArray.length;
    }

    select(perfil:Perfil) {
        this.selectedPerfil = perfil;
    }

    deletePerfil(perfilId: number) {
        this._perfilService.deletePerfil(perfilId);
    }
}