import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"view-books",
        component:ViewAllBookComponent
    }
];
