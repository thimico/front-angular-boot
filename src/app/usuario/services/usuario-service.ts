/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Injectable} from "@angular/core";
import {Usuario} from "../models/usuario";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions  } from '@angular/http';

@Injectable()
export class UsuarioService {

	private apiUrl = 'http://localhost:8080/api/private/user';  // URL para web api

    constructor(private http:Http) {
    }

   	/**
	* Listando pessoas
	*/
	getUsuarios() {
	 	return this.http.get(this.apiUrl)
		 	.toPromise()
		 	.then(response => response.json())
		 	.catch(this.handleError);
	}

	/**
	* Nova pessoa
	* @param pessoa: Array
	* @return http POST
	*/
	novo(usuario: Usuario) {
	 	let body = JSON.stringify(usuario);
	 	let headers = new Headers({'Content-Type': 'application/json'});
	 	let options = new RequestOptions({ headers: headers });
	 	return this.http.post(this.apiUrl, body, options)
		 	.toPromise()
		 	.then(res => res.json())
		 	.catch(this.handleError);
	}

	/**
	* Editar pessoa
	* @param pessoa: Array
	* @return http PUT
	*/
	editar(usuario: Usuario) {
	 	//let id = usuario.id;
	 	//delete usuario.id;
	 	let body = JSON.stringify(usuario);
	 	let headers = new Headers({ 'Content-Type': 'application/json' });
	 	let options = new RequestOptions({ headers: headers });
	 	let url = this.apiUrl;

	 	return this.http.put(url, body, options)
		 	.toPromise()
		 	.then(res => res.json())
		 	.catch(this.handleError);
	}

	/**
	* Excluir pessoa
	* @param id: number
	* @return http DELETE
	*/
	excluir(id: number) {
	 	let url = this.apiUrl + '/' + id;
	 	return this.http.delete(url)
		 	.toPromise()
		 	.then(res => res.json().data)
		 	.catch(this.handleError);
	}

	 private handleError(error: any) {
	    console.error('An error occurred');
	    return Promise.reject(error.message || error);
  	}

}