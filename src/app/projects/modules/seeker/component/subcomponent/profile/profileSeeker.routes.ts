import { Routes } from "@angular/router";

export const profileSeekerRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./profile.component').then(c => c.ProfileComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./profile-subcomp/profile-subcomp.component').then(c => c.ProfileSubcompComponent)
            }
        ],
    },
];