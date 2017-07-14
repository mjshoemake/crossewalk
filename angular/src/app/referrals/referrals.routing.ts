import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ReferralListComponent } from './referral-list.component';

const routes: Routes = [
  { path: 'referral-list', component: ReferralListComponent } //,
//  { path: 'franchise/:id', component: FranchiseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralsRoutingModule { }

export const routedComponents = [
	ReferralListComponent
];
