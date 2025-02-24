import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnHome } from './pages/home/home.component';
import { AlumnFormPage } from './pages/form/form.component';
import { ViewAlumns } from './pages/view-alumns/view-alumns.component';

const routes: Routes = [
  { path: '', component: AlumnHome },
  { path: 'list', component: ViewAlumns },
  { path: 'create', component: AlumnFormPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnRoutingModule { }
