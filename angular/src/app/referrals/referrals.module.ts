import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReferralsRoutingModule, routedComponents } from './referrals.routing';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Declarations
import { ReferralListComponent } from './referral-list.component';
import { ReferralsService } from './referrals.service';

@NgModule({
  imports: [ReferralsRoutingModule,
            SharedModule,
            CommonModule,
            NgbModule],
  declarations: [routedComponents,
                 ReferralListComponent
                ],
  providers: [ReferralsService]
})
export class ReferralsModule { }
