import { Routes } from "@angular/router";

export const seekerSubRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./subcomponent.component').then(c => c.SubcomponentComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard/seekerDashboard.routes').then(r => r.seekerDashboardRoute)
            }
        ]
    },
    {
        path: "",
        redirectTo: '/seeker/layout',
        pathMatch: 'full'
    }
];