import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';
import { PreferencesComponent } from './prefs.component';

const routes: Routes = [  
  { path: 'prefs', component: PreferencesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule { }

export const routedComponents = [
	PreferencesComponent
];  