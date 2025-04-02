import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./projects/component/module.routes').then(r => r.moduleRoutes)
    }
];
