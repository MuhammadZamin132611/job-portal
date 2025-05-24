import { Routes } from "@angular/router";

export const recuriterSubRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuritersubcomponent.component').then(c => c.RecuritersubcomponentComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./recuriter-dashboard/recuriterDashboard.routes').then(r => r.recuriterDashboardRoutes)
            },
            {
                path: 'profile-search',
                loadChildren: () => import('./recuriter-profile-search/recuriterProfileSerarch.routes').then(r => r.recuriterProfileSearchRoutes)
            },
            // {
            //     path: 'profile-search',
            //     loadChildren: () => import('./recuriter-profile-search/recuriterProfileSerarch.routes').then(r => r.recuriterProfileSearchRoutes)
            // },

        ]
    },
    {
        path: "",
        redirectTo: '/recuriter/layout',
        pathMatch: 'full'
    }
]