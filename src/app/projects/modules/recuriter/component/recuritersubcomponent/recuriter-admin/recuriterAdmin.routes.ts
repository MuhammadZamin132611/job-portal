import { Routes } from "@angular/router";

export const recuriterAdminRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-admin.component').then(c => c.RecuriterAdminComponent),
        children: [
            // {
            //     path: '',
            //     loadComponent: () => import('./recuriter-main-dashboard/recuriter-main-dashboard.component').then(c => c.RecuriterMainDashboardComponent),
            // },
            
        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/admin',
        pathMatch: 'full'
    }
]