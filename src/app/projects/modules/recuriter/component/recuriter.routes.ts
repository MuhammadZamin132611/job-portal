import { Routes } from "@angular/router";

export const recuriterRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.routes').then(r => r.recuriterAuthenticationRouter)
    },
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./authentication/authentication.routes').then(r => r.recuriterAuthenticationRouter)
    // },
    {
        path: '',
        redirectTo: '/recuriter/auth',
        pathMatch: 'full'
    }
]