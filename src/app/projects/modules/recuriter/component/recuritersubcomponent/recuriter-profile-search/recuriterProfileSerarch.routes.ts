import { Routes } from "@angular/router";

export const recuriterProfileSearchRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-profile-search.component').then(c => c.RecuriterProfileSearchComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./recuriter-profile-search-main/recuriter-profile-search-main.component').then(c => c.RecuriterProfileSearchMainComponent),
            },
            
        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/profile-search',
        pathMatch: 'full'
    }
]