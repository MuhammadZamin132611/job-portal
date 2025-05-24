import { Routes } from "@angular/router";

export const recuriterRouter: Routes = [
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
        path: 'otp-varification',
        loadComponent: () => import('./recuriter-otp-varification/recuriter-otp-varification.component').then(c => c.RecuriterOtpVarificationComponent)
    },
    {
        path: 'reset-password',
        loadComponent: () => import('./reset-password-recuriter/reset-password-recuriter.component').then(c => c.ResetPasswordRecuriterComponent)
    },
    {
        path: 'create-account',
        loadComponent: () => import('./recuriter-create-account/recuriter-create-account.component').then(c => c.RecuriterCreateAccountComponent)
    },
    {
        path: '',
        redirectTo: "/recuriter/login",
        pathMatch: 'full'
    }
];