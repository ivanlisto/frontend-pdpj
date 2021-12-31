import { Component, OnInit } from '@angular/core'
import { ObterDossie } from '@models/obterDossie.model'
import { Dossie } from '@models/dossie.models'
import { ConsultaService } from 'src/app/services/consulta.service'
import jsPDF from 'jspdf'


@Component({
    selector: 'app-tela-consulta',
    templateUrl: './tela-consulta.component.html',
    styleUrls: ['./tela-consulta.component.scss']
})
export class TelaConsultaComponent implements OnInit {
    //

    public dossie: Dossie
    public listDossie: Array<Dossie> = [];
    public obterDossie = ObterDossie
    public filtro: string = '11077466714'
    public laudos: number[] = []

    constructor(protected consultaService: ConsultaService) {
        // this.obterDossie = new ObterDossie()
        this.dossie = new Dossie()
    }

    ngOnInit() {
      this.loadDossieLocalStorage();
    }

    loadDossieLocalStorage() {
      if (localStorage.getItem('listDossie')) {
        this.listDossie = JSON.parse(localStorage.getItem('listDossie'));
      }
    }

    public findByCpf() {

        if (!this.filtro.trim()) {
            alert('Informe um CPF válido!!!')
        } else {
            this.consultaService.findByCpf(this.filtro).subscribe(
                dossie => {
                    (this.popularDossie(dossie))
                },
                err => console.log(err),
                () => {
                    console.log('requisição completa')
                }
            )
        }
    }

    public popularDossie(dossie) {
      this.listDossie.push(dossie);
      this.saveListDossieInLocalStorage();
    }

    saveListDossieInLocalStorage() {
      const data = JSON.stringify(this.listDossie);
      localStorage.setItem('listDossie', data);
    }

    ordena(dossie: ObterDossie) {
      this.dossie.laudos.listaLaudoSABITO.forEach(
          (element, index) => {
              this.laudos.push(element.cdRequerimento)
              // console.log(this.laudos[index])
          }
      )

      let laudos = this.laudos.filter(
          (element, index) => this.laudos.indexOf(element) === index
      )
      console.log(laudos)
  }


    public findByNomeMaeData() {}
}
