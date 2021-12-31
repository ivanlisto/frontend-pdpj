import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ObterDossie } from '@models/obterDossie.model'
import { Dossie } from '@models/dossie.models'
import { SolicitarDossie } from '@models/solicitarDossie.model'
import { StatusDossie } from '@models/statusDossie.model'
import { Observable, throwError } from 'rxjs'
import { catchError, map, shareReplay, take, tap } from 'rxjs/operators'


import { EnvService } from './env.service'

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
    //
    public headers: HttpHeaders
    public solicitardossie: SolicitarDossie
    public statusdossie: StatusDossie
    public parametro: string = ''

    constructor(private http: HttpClient, private env: EnvService) {
        //
        this.statusdossie = new StatusDossie()
        this.solicitardossie = new SolicitarDossie()

        this.headers = new HttpHeaders()
        this.headers = this.headers.append('Content-Type', 'application/json')
        this.headers = this.headers.append('X-PDPJ-CPF-USUARIO-OPERADOR', '93758798412')
        this.headers = this.headers.append('Cache-Control', 'no-cache')
    }

    public findByCpf(filtro: string): Observable<Dossie> {

      // /*1*/ this.solicitardossie.cpf = filtro
      // console.log('teste', this.solicitardossie);
      //  /*2*/ let body = JSON.stringify(this.solicitardossie)
      //
      //  const headers= new HttpHeaders()
      //   .set('content-type', 'application/json')
      //   .set('Access-Control-Allow-Origin', '*');
      //
      //  let options = { headers: headers };
      // //  /*3*/ this.findProtocolo(filtro)
      //
      //  /*4*/ return this.http.post(`${this.env.solicitarDossie}`, body, options).pipe(
      //    catchError(this.handlerror),
      //    shareReplay(),
      //    // map(data => data as ObterDossie)
      //    tap(x => console.log(x))
      //   )

      this.solicitardossie.cpf = filtro;
      const obj = {tipo: 'PREVIDENCIARIO'};
      let body = JSON.stringify(obj);

      const headers = new HttpHeaders()
        .set('X-PDPJ-CPF-USUARIO-OPERADOR', '93758798412')
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

      let options = { headers: headers };

      return this.http.post(`${this.env.pesquisarPedidosDossie}`, body, options).pipe(
        catchError(this.handlerror),
        shareReplay(),
        tap(x => console.log(x))
      );
    }

    findProtocolo(parametro: string) {
        return this.http
            .get(`${this.env.solicitarLink}?parametro=${parametro}`)
            .pipe(
                catchError(this.handlerror),
                shareReplay(),
                tap(x => console.log(x))
            )
            .subscribe(
                res => (this.statusdossie = this.extractData(res)),
                err => this.handlerror(err),
                () => {
                    this.parametro = this.statusdossie.protocolo
                }
            )
    }

    obterDossie(protocolo: string, pdf: boolean) {
      return this.http
        .get(`${this.env.obterDossie}/${protocolo}/${pdf}`).pipe(
          catchError(this.handlerror),
          shareReplay(),
          tap(x => console.log(x))
        );
    }

    findByNomeMaeData(nome: string, nomeMae: string, dataNascimento: string) {
      // return [];
      // return this.http
    }

    /*5*/ public handlerror(handlerror: any): Observable<any> {
        console.log('Erro na requisição=>', handlerror)
        return throwError(handlerror)
    }

    /*6*/ public extractData(res: any) {
        let body = res
        return body
    }
}
