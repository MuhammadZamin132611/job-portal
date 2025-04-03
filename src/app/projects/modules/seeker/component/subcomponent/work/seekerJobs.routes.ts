import { Routes } from "@angular/router";

export const seekerJobsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./jobs/jobs.component').then(c => c.JobsComponent)
    },
    {
        path: '',
        redirectTo: '/seeker/layout/jobs',
        pathMatch: 'full'
    }
];