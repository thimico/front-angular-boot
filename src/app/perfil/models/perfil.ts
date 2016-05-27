import {Sistema} from "../../sistema/models/sistema";
import 'rxjs/Rx';
/**
 * Created by thiago.oliveira on 19/05/2016.
 */
export class Perfil {

    constructor(public id:number, public dsPerfil:string, public nmPerfil:string, public sistema:Sistema) {
    }

}