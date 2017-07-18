import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ArticlesRoutingModule, routedComponents } from './articles.routing';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Declarations
import { ArticlesComponent } from './articles.component';
import { ArticlesService } from './articles.service';

@NgModule({
  imports: [ArticlesRoutingModule,
            SharedModule,
            CommonModule,
            NgbModule],
  declarations: [routedComponents,
                 ArticlesComponent
                ],
  providers: [ArticlesService]
})
export class ArticlesModule { }
