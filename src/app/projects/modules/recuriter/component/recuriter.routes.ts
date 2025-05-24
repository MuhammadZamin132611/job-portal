import { Routes } from "@angular/router";

export const recuriterRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.routes').then(r => r.recuriterAuthenticationRouter)
    },
    {
        path: 'layout',
        loadChildren: () => import('./recuritersubcomponent/recuriterSub.routes').then(r => r.recuriterSubRoutes)
    },
    {
        path: '',
        redirectTo: '/recuriter/auth',
        pathMatch: 'full'
    }
]