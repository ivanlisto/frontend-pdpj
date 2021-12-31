import { Laudo } from './laudo.model'

export class ListaLaudoSABITO {
    public listaLaudoSABITO?: Laudo[]
    public mensagemTO?: {
        httpCode?: number
        result?: string
    }
}
