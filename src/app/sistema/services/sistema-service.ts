/**
 * Created by thiago.oliveira on 19/05/2016.
 */
import {Injectable} from "@angular/core";
import {Sistema} from "../models/sistema";
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions  } from '@angular/http';

@Injectable()
export class SistemaService {


	private apiUrl = 'http://localhost:8080/api/private/sistema';  // URL para web api

    constructor(private http:Http) {
    }


   	/**
	* Listando pessoas
	*/
	getSistemas() {
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
	novo(sistema: Sistema) {
	 	let body = JSON.stringify(sistema);
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
	editar(sistema: Sistema) {
	 	//let id = sistema.id;
	 	//delete sistema.id;
	 	let body = JSON.stringify(sistema);
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