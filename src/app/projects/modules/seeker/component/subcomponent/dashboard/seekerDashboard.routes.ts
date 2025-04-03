import { Routes } from "@angular/router";

export const seekerDashboardRoute: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'promoted-jobs',
                loadComponent: () => import('./promoted-jobs/promoted-jobs.component').then(c => c.PromotedJobsComponent)
            },
        ]
    },

    {
        path: '',
        redirectTo: '/seeker/layout/dashboard',
        pathMatch: 'full'
    }
];