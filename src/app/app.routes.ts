import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SettingComponent } from './setting/setting.component';
import { authGuard } from './helper/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home page',
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    },
    {
        path: 'login/validateOtp',
        component: LoginComponent,
        title: 'Validate OTP',
    },
    {
        path: 'register',
        component: RegistrationComponent,
        title: 'Registration'
    },
    {
        path: 'settings',
        component: SettingComponent,
        title: 'User settings',
        canActivate: [authGuard]
    },

];
