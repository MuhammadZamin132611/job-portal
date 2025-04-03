import { Routes } from "@angular/router";

export const seekerAuthenticationRouter: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent)
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent)
    },
    
    {
        path: '',
        redirectTo: "/seeker/auth/login",
        pathMatch: 'full'
    }
];