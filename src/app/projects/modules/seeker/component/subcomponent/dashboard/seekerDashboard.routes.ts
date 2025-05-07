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
            {
                path: 'jobs-for-you',
                loadComponent: () => import('./jobs-for-you/jobs-for-you.component').then(c => c.JobsForYouComponent)
            },
            {
                path: 'job-details',
                loadComponent: () => import('./job-details/job-details.component').then(c => c.JobDetailsComponent)
            },
        ]
    },

    {
        path: '',
        redirectTo: '/seeker/layout/dashboard',
        pathMatch: 'full'
    }
];