import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/referrals',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
