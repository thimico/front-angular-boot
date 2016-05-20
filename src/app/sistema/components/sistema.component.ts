/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Sistema} from "../models/sistema";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'sistema',
    templateUrl: './app/sistema/components/sistema.html'
})
export class SistemaComponent {
    @Input() sistema:Sistema;
    @Output() statusChanged:any = new EventEmitter<any>();

    toggleAtivo() {
        this.sistema.toggleAtivo();
        this.statusChanged.emit(null);
    }

}