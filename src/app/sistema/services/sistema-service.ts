/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Injectable} from "@angular/core";
import {Usuario} from "../models/usuario";
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsuarioService {


    constructor(private http:Http) {
    }

    getUsuarios() {
        return this.http.get('http://localhost:8080/api/private/user')
            .map((res:Response) => res.json());
    }



}