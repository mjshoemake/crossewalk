import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router'
import { FranchiseListComponent } from './franchise-list.component'; 

const routes: Routes = [  
  { path: 'franchise-list', component: FranchiseListComponent } //,
//  { path: 'franchise/:id', component: FranchiseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchiseRoutingModule { }

export const routedComponents = [
	FranchiseListComponent
];  