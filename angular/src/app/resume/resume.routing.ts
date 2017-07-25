import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ResumeComponent } from './resume.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }

export const routedComponents = [
	ResumeComponent
];
