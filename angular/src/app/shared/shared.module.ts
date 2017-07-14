import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Declarations
import { CollapsiblePanelComponent } from './collapsible-panel.component';
import { CollapsibleSubPanelComponent } from './collapsible-sub-panel.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
  	CollapsiblePanelComponent,
  	CollapsibleSubPanelComponent
  ],
  exports: [
  	CollapsiblePanelComponent,
  	CollapsibleSubPanelComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
