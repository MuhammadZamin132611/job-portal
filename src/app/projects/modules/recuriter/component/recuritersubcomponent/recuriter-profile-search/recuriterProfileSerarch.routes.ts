import { Routes } from "@angular/router";

export const recuriterProfileSearchRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-profile-search.component').then(c => c.RecuriterProfileSearchComponent),
        children: [
            // {
            //     path: '',
            //     loadComponent: () => import('./recuriter-main-dashboard/recuriter-main-dashboard.component').then(c => c.RecuriterMainDashboardComponent),
            // },
            
        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/profile-search',
        pathMatch: 'full'
    }
]