import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReferralsRoutingModule, routedComponents } from './referrals.routing';
import { SharedModule } from '../shared/shared.module';

// Declarations
import { ReferralListComponent } from './referral-list.component';
import { ReferralsService } from './referrals.service';

@NgModule({
  imports: [ReferralsRoutingModule,
            SharedModule,
            CommonModule],
  declarations: [routedComponents,
                 ReferralListComponent
                ],
  providers: [ReferralsService]
})
export class ReferralsModule { }
