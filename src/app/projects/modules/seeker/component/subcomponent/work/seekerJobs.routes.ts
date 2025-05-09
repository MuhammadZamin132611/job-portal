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
            {
                path: 'matching-jobs',
                loadComponent: () => import('./matching-jobs/matching-jobs.component').then(c => c.MatchingJobsComponent),
            },
            {
                path: 'applied-jobs',
                loadComponent: () => import('./applied-jobs/applied-jobs.component').then(c => c.AppliedJobsComponent),
            },
            {
                path: 'shortlisted-jobs',
                loadComponent: () => import('./shortlisted-jobs/shortlisted-jobs.component').then(c => c.ShortlistedJobsComponent),
            },
            {
                path: 'selected-jobs',
                loadComponent: () => import('./selected-jobs/selected-jobs.component').then(c => c.SelectedJobsComponent),
            },
            {
                path: 'jobs-status',
                loadComponent: () => import('./job-status/job-status.component').then(c => c.JobStatusComponent),
            },
        ]
    },
    {
        path: '',
        redirectTo: '/seeker/layout/jobs',
        pathMatch: 'full'
    }
];