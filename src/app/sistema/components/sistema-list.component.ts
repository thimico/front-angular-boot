/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Sistema} from "../models/sistema";
import {OnInit} from "@angular/core";
import {SistemaService} from "../services/sistema-service";
import {SistemaComponent} from "./sistema.component";

@Component({
    selector: 'sistema-list',
    templateUrl: './app/sistema/components/sistema-list.html',
    directives: [SistemaComponent],
    providers: [SistemaService]
})
export class SistemaListComponent implements OnInit {

    sistemaCount:number;
    selectedSistema:Sistema;
    sistemas: any[] = [];
    filteredSistemas: any[] = [];

    constructor(private _sistemaService:SistemaService) {
     _sistemaService.getSistemas().subscribe((sistemas:any[])  => {
         this.sistemas = this.filteredSistemas = sistemas;
     });
       this.calculateSistemaCount();
    }

    ngOnInit() {

        console.log("Sistema component initialized with " + this.sistemas.length + " sistemas.");
    }

    calculateSistemaCount() {
        this.sistemaCount = this.sistemas.length;
    }

    select(sistema:Sistema) {
        this.selectedSistema = sistema;
    }
}