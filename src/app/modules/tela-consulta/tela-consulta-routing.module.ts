import { NgModule, Component } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TelaConsultaComponent } from './tela-consulta.component'
import { TelaViewlaudoComponent } from './tela-viewlaudo/tela-viewlaudo.component'

const routes: Routes = [
    {
        path: 'tela-viewlaudo/:id',
        component: TelaViewlaudoComponent
    },

    {
        path: '',
        component: TelaConsultaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TelaConsultaRoutingModule {}

export class TelaviewlaudoRoutingModule {}
