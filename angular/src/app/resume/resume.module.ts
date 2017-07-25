import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ResumeRoutingModule, routedComponents } from './resume.routing';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Declarations
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';

@NgModule({
  imports: [ResumeRoutingModule,
            SharedModule,
            CommonModule,
            NgbModule],
  declarations: [routedComponents,
                 ResumeComponent
                ],
  providers: [ResumeService]
})
export class ResumeModule { }
