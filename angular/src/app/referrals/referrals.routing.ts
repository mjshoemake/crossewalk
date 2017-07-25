import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ReferralListComponent } from './referral-list.component';

const routes: Routes = [
  { path: 'referrals', component: ReferralListComponent } //,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralsRoutingModule { }

export const routedComponents = [
	ReferralListComponent
];
