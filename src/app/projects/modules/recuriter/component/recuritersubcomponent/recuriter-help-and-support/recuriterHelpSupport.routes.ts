import { Routes } from "@angular/router";

export const recuriterHelpAndSupportRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-help-and-support.component').then(c => c.RecuriterHelpAndSupportComponent),
        children: [
            // {
            //     path: '',
            //     loadComponent: () => import('./recuriter-main-dashboard/recuriter-main-dashboard.component').then(c => c.RecuriterMainDashboardComponent),
            // },
            
        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/help-support',
        pathMatch: 'full'
    }
]