export class Cabecalho {
    constructor(
        public dataSolicitacao?: string,
        public nomeCliente?: string,
        public parametro?: string,
        public protocolo?: string,
        public status?: string,
        public tipoDossie?: string,
        public tipoParametro?: string,
        public urlRetorno?: string
    ) {}
}
