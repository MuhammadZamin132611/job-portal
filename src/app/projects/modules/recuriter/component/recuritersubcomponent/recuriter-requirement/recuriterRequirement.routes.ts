import { Routes } from "@angular/router";

export const recuriterRequirementRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./recuriter-requirement.component').then(c => c.RecuriterRequirementComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./recuriter-requirement-main/recuriter-requirement-main.component').then(c => c.RecuriterRequirementMainComponent),
            },

        ]
    },
    {
        path: '',
        redirectTo: '/recuriter/layout/requirement',
        pathMatch: 'full'
    }
];