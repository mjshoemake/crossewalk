import { NgModule } from '@angular/core';  
//import { CommonModule } from '@angular/common';  
//import { FormsModule } from '@angular/forms';
import { FranchiseRoutingModule, routedComponents } from './franchise.routing';

@NgModule({
  imports: [FranchiseRoutingModule],
  declarations: [routedComponents]
})
export class FranchiseModule { }  