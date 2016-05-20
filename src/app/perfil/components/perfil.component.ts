/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Perfil} from "../models/perfil";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";


@Component({
    selector: 'perfil',
    templateUrl: './app/perfil/components/perfil.html'
})
export class PerfilComponent {
    @Input() perfil:Perfil;
    @Output() statusChanged:any = new EventEmitter<any>();

    toggleAtivo() {
        this.perfil.toggleAtivo();
        this.statusChanged.emit(null);
    }

}