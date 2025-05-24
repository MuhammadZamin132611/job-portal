import { Routes } from "@angular/router";

export const moduleRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing-screen/landing-screen.component').then(m => m.LandingScreenComponent)
    },
    {
        path: 'seeker',
        loadChildren: () => import('../modules/seeker/component/seeker.routes').then(r => r.seekerRoutes)
    },
    {
        path: 'recuriter',
        loadChildren: () => import('../modules/recuriter/component/recuriter.routes').then(r => r.recuriterRoutes)
    },
];