import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { DownloadsRoutingModule, routedComponents } from './downloads.routing';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Declarations
import { DownloadsComponent } from './downloads.component';
import { DownloadsService } from './downloads.service';

@NgModule({
  imports: [DownloadsRoutingModule,
            SharedModule,
            CommonModule,
            NgbModule],
  declarations: [routedComponents,
                 DownloadsComponent
                ],
  providers: [DownloadsService]
})
export class DownloadsModule { }
