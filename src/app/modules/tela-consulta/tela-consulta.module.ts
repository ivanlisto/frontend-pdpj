import { NgModule } from '@angular/core'
import { SharedModule } from '@shared/shared.module'

import { TelaConsultaRoutingModule } from './tela-consulta-routing.module'
import { TelaConsultaComponent } from './tela-consulta.component'
import { TelaViewlaudoComponent } from './tela-viewlaudo/tela-viewlaudo.component'

@NgModule({
    declarations: [TelaConsultaComponent, TelaViewlaudoComponent],
    imports: [SharedModule, TelaConsultaRoutingModule],
    exports: [TelaConsultaComponent, TelaViewlaudoComponent],
    providers: []
})
export class TelaConsultaModule {}
