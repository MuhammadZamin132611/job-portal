import { Routes } from "@angular/router";

export const moduleRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing-screen/landing-screen.component').then(m => m.LandingScreenComponent)
    },
    {
        path: 'seeker',
        loadChildren: () => import('../modules/seeker/component/authentication/authentication.routes').then(r => r.seekerRouter)
    },
    {
        path: 'recuriter',
        loadChildren: () => import('../modules/recuriter/component/authentication/authentication.routes').then(r => r.recuriterRouter)
    },
];