import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    },
    {
        path: 'register',
        component: RegistrationComponent,
        title: 'Registration'
    },
    {
        path: 'settings',
        component: SettingComponent,
        title: 'User settings'
    },

];
