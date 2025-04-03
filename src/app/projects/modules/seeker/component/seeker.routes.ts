import { Routes } from "@angular/router";

export const seekerRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.routes').then(r => r.seekerAuthenticationRouter)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/seekerDashboard.routes').then(r => r.seekerDashboardRoute)
    },
    {
        path: '',
        redirectTo: '/seeker/auth',
        pathMatch: 'full'
    }
];