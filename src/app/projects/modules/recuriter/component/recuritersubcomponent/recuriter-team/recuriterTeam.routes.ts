import { Routes } from "@angular/router";

export const recuriterTeamRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-team.component').then(c => c.RecuriterTeamComponent),
        children: [
            // {
            //     path: '',
            //     loadComponent: () => import('./recuriter-main-dashboard/recuriter-main-dashboard.component').then(c => c.RecuriterMainDashboardComponent),
            // },

        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/team',
        pathMatch: 'full'
    }
];