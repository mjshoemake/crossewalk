import { NgModule } from '@angular/core';  
//import { CommonModule } from '@angular/common';  
//import { FormsModule } from '@angular/forms';
import { PreferencesRoutingModule, routedComponents } from './preferences.routing';

@NgModule({
  imports: [PreferencesRoutingModule],
  declarations: [routedComponents]
})
export class PreferencesModule { }  