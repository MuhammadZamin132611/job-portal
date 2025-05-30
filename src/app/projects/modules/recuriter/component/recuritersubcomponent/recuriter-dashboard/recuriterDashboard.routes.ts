import { Routes } from "@angular/router";

export const recuriterDashboardRoutes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./recuriter-dashboard.component').then(c => c.RecuriterDashboardComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./recuriter-main-dashboard/recuriter-main-dashboard.component').then(c => c.RecuriterMainDashboardComponent),
            },
            
        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/dashboard',
        pathMatch: 'full'
    }
]