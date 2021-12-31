import { Component, OnInit } from '@angular/core'
import { Dossie } from '@models/dossie.models'
import { ConsultaService } from 'src/app/services/consulta.service'
import {ActivatedRoute, Router} from "@angular/router";
import {ObterDossie} from "@models/obterDossie.model";

@Component({
    selector: 'app-tela-viewlaudo',
    templateUrl: './tela-viewlaudo.component.html',
    styleUrls: ['./tela-viewlaudo.component.scss']
})
export class TelaViewlaudoComponent implements OnInit {
    public dossie: ObterDossie;
    public filtro: string = '11077466714'
    public laudos: number[] = []
    public protocolo: string;

    constructor(
      protected consultaService: ConsultaService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
    ngOnInit() {
        // this.consultaService.findByCpf(this.filtro).subscribe(
        //      dossie => {
        //         this.dossie = dossie
        //     },
        //
        //     err => console.log(err),
        //     () => {
        //         console.log('requisição completa')
        //     }
        // )
      this.route.params.subscribe(params => {
        this.protocolo = params['protocolo'];
        this.obterDossie();
      });
    }

    obterDossie() {
      this.consultaService.obterDossie(this.protocolo, true).subscribe(
        dossie => {
          (this.dossie = dossie);
        },
        err => console.log(err),
        () => {
          console.log('requisição completa');
        }
      );
    }

}
