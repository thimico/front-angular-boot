/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Injectable} from "@angular/core";

import {Perfil} from "../models/perfil";
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions  } from '@angular/http';

@Injectable()
export class PerfilService {

	private apiUrl = 'http://localhost:8080/api/private/perfil';  // URL para web api

    constructor(private http:Http) {
    }

   	/**
	* Listando pessoas
	*/
	getPerfils() {
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
	novo(perfil: Perfil) {
	 	let body = JSON.stringify(perfil);
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
	editar(perfil: Perfil) {
	 	//let id = perfil.id;
	 	//delete perfil.id;
	 	let body = JSON.stringify(perfil);
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