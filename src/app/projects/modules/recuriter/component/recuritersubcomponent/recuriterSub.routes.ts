import { Routes } from "@angular/router";

export const recuriterSubRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuritersubcomponent.component').then(c => c.RecuritersubcomponentComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./recuriter-dashboard/recuriterDashboard.routes').then(r => r.recuriterDashboardRoutes)
            }
        ]
    },
    {
        path: "",
        redirectTo: '/recuriter/layout',
        pathMatch: 'full'
    }
]