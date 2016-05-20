/**
 * Created by thiago.oliveira on 19/05/2016.
 */
export class Sistema {

    constructor(public id:number, public nmLogin:string, public isAtivo:boolean) {
    }

    toggleAtivo() {
        this.isAtivo = !this.isAtivo;
    }
}