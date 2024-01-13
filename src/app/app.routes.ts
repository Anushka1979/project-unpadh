import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { Page1Component } from './components/page1/page1.component';
import { Page1AboutComponent } from './components/about/page1-about/page1-about.component';
import { Page2Component } from './components/page2/page2.component';
import { Page1SeriesComponent } from './components/tseries/page1-series/page1-series.component';


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
        path: 'tseries',
        component: Page1SeriesComponent
    },
    {
        path: 'page2',
        component: Page2Component
    },
    {
        path: '', redirectTo: 'page1', pathMatch: 'full'
    }
];
