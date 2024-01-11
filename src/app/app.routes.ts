import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { Page1Component } from './components/page1/page1.component';
import { Page1AboutComponent } from './components/about/page1-about/page1-about.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'nav',
        component: NavComponent
    },
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'about',
        component: Page1AboutComponent
    },
    {
        path: '', redirectTo: 'page1', pathMatch: 'full'
    }
];
