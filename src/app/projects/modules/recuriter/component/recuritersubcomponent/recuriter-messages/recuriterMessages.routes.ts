import { Routes } from "@angular/router";

export const recuriterMessagesRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-messages.component').then(c => c.RecuriterMessagesComponent),
        children: [
            // {
            //     path: '',
            //     loadComponent: () => import('./recuriter-main-dashboard/recuriter-main-dashboard.component').then(c => c.RecuriterMainDashboardComponent),
            // },

        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/messages',
        pathMatch: 'full'
    }
];