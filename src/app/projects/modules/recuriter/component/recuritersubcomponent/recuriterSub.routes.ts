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
            {
                path: 'requirement',
                loadChildren: () => import('./recuriter-requirement/recuriterRequirement.routes').then(r => r.recuriterRequirementRoute)
            },
            {
                path: 'admin',
                loadChildren: () => import('./recuriter-admin/recuriterAdmin.routes').then(r => r.recuriterAdminRoutes)
            },
            {
                path: 'team',
                loadChildren: () => import('./recuriter-team/recuriterTeam.routes').then(r => r.recuriterTeamRoute)
            },
            {
                path: 'messages',
                loadChildren: () => import('./recuriter-messages/recuriterMessages.routes').then(r => r.recuriterMessagesRoute)
            },
            {
                path: 'help-support',
                loadChildren: () => import('./recuriter-help-and-support/recuriterHelpSupport.routes').then(r => r.recuriterHelpAndSupportRoute)
            },

        ]
    },
    {
        path: "",
        redirectTo: '/recuriter/layout',
        pathMatch: 'full'
    }
]