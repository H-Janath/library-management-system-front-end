import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewAllBarrowersComponent } from './page/view-all-barrowers/view-all-barrowers.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"view-books",
        component:ViewAllBookComponent
    },
    {
        path:"sign-up",
        component:RegisterComponent
    },
    {
        path:"view-barrowers",
        component:ViewAllBarrowersComponent
    }
];
