import { Routes } from "@angular/router";

export const profileSeekerRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./profile.component').then(c => c.ProfileComponent),
    }
];