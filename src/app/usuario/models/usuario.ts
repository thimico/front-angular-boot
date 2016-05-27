import 'rxjs/Rx';
/**
 * Created by thiago.oliveira on 19/05/2016.
 */
export class Usuario {

    constructor(public id:number, public nmLogin, nmUsuario, nmSenha, nmFuncao, txCpf, txEmail, stUsuario:string,
    public dtNascimento:Date) {
    }

}