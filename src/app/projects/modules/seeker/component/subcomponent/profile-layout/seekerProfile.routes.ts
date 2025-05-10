import { Routes } from "@angular/router";

export const seekerProfileRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./profile-layout.component').then(c => c.ProfileLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent),
            },
        ]
    },
    {
        path: '',
        redirectTo: '/seeker/layout/profile',
        pathMatch: 'full'
    }
];