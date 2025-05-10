import { Routes } from "@angular/router";

export const seekerSubRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./subcomponent.component').then(c => c.SubcomponentComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard/seekerDashboard.routes').then(r => r.seekerDashboardRoute)
            },
            {
                path: 'jobs',
                loadChildren: () => import('./work/seekerJobs.routes').then(r => r.seekerJobsRoutes)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile-layout/seekerProfile.routes').then(r => r.seekerProfileRoutes)
            },
        ]
    },
    {
        path: "",
        redirectTo: '/seeker/layout',
        pathMatch: 'full'
    }
];