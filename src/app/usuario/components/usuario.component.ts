/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Usuario} from "../models/usuario";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'usuario',
    templateUrl: './app/usuario/components/usuario.html'
})
export class UsuarioComponent {
    @Input() usuario:Usuario;
    @Output() statusChanged:any = new EventEmitter<any>();

    toggleAtivo() {
        this.usuario.toggleAtivo();
        this.statusChanged.emit(null);
    }
}