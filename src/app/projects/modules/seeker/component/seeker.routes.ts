import { Routes } from "@angular/router";

export const seekerRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.routes').then(r => r.seekerAuthenticationRouter)
    },
    {
        path: 'layout',
        loadChildren: () => import('./subcomponent/seekerSub.routes').then(r => r.seekerSubRoutes)
    },
    // {
    //     path: 'dashboard',
    //     loadChildren: () => import('./subcomponent/dashboard/seekerDashboard.routes').then(r => r.seekerDashboardRoute)
    // },
    {
        path: '',
        redirectTo: '/seeker/auth',
        pathMatch: 'full'
    }
];