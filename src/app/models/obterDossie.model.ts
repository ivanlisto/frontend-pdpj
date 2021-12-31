import { Cabecalho } from './cabecalho.model'
import { DossieMedico } from './dossieMedico.model'
import { ProcessamentoTO } from './processamentoTO.model'

export class ObterDossie {
    constructor(
        public cabecalho?: Cabecalho,
        public dossieMedico?: DossieMedico,
        public dossieMedicoPDF?: string,
        public processamentoTO?: ProcessamentoTO
    ) {}
}
