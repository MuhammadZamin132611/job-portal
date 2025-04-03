import { Routes } from "@angular/router";

export const seekerDashboardRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),

    },
    {
        path: '',
        redirectTo: '/seeker/dashboard',
        pathMatch: 'full'
    }
];