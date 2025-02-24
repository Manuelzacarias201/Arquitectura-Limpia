import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherHome } from './pages/home/home.component';
import { ViewTeachersComponent } from './pages/view-teachers/view-teachers.component';
import { TeacherFormPage } from './pages/form/form.component';
const routes: Routes = [
  { path: '', component: TeacherHome },
  { path: 'list', component:  ViewTeachersComponent},
  { path: 'create', component: TeacherFormPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
