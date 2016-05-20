/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {Perfil} from "../models/perfil";
import { Observable }       from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class PerfilService {
    perfils$: Observable<Perfil[]>;
    private _baseUrl: string;
    private _perfilsObserver: Observer<Perfil[]>;
    private _dataStore: {
        perfils: Perfil[]
    };

    constructor(private _http:Http) {
        this._baseUrl  = 'http://localhost:8080/api/private';
        this.perfils$ = new Observable(observer => this._perfilsObserver = observer).share();
        this._dataStore = { perfils: [] };
    }


    loadPerfils() {
        this._http.get(`${this._baseUrl}/perfil`).map(response => response.json()).subscribe(data => {
            this._dataStore.perfils = data;
            this._perfilsObserver.next(this._dataStore.perfils);
        }, error => console.log('Could not load perfils.'));
    }

    deletePerfil(perfilId: number) {
        this._http.delete(`${this._baseUrl}/perfil/${perfilId}`).subscribe(response => {
            this._dataStore.perfils.forEach((t, i) => {
                if (t.id === perfilId) { this._dataStore.perfils.splice(i, 1); }
            });

            this._perfilsObserver.next(this._dataStore.perfils);
        }, error => console.log('Could not delete perfil.'));
    }

}