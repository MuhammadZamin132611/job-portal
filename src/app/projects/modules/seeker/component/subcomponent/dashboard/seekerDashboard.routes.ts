import { Routes } from "@angular/router";

export const seekerDashboardRoute: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: '',
        redirectTo: '/seeker/layout/dashboard',
        pathMatch: 'full'
    }
];