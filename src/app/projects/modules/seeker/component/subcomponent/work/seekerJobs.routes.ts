import { Routes } from "@angular/router";

export const seekerJobsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./work.component').then(c => c.WorkComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./jobs/jobs.component').then(c => c.JobsComponent),
            },
            {
                path: 'saved-jobs',
                loadComponent: () => import('./saved-jobs/saved-jobs.component').then(c => c.SavedJobsComponent),
            },
        ]
    },
    {
        path: '',
        redirectTo: '/seeker/layout/jobs',
        pathMatch: 'full'
    }
];