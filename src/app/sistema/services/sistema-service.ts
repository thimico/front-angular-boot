/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Injectable} from "@angular/core";
import {Sistema} from "../models/Sistema";
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class SistemaService {


    constructor(private http:Http) {
    }

    getSistemas() {
        return this.http.get('http://localhost:8080/api/private/sistema')
            .map((res:Response) => res.json());
    }



}