import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { ProgramsHomeComponent } from './components/programs/programs-home/programs-home.component';
import { ManagementHomeComponent } from './components/programs/management/management-home/management-home.component';
import { DevelopmentHomeComponent } from './components/programs/Development/development-home/development-home.component';
import { DataScienceHomeComponent } from './components/programs/Data-Science/data-science-home/data-science-home.component';
import { AiHomeComponent } from './components/programs/AI/ai-home/ai-home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full',
  },
  {
    path: 'programs',
    component: ProgramsHomeComponent,
  },
  {
    path: 'managementHome',
    component: ManagementHomeComponent,
  },
  {
    path: 'developmentHome',
    component: DevelopmentHomeComponent,
  },
  {
    path: 'dataScienceHome',
    component: DataScienceHomeComponent,
  },
  {
    path: 'AIHome',
    component: AiHomeComponent
  },
];
