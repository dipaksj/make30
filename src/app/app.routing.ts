import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from "./login-component/login-component.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgetComponent } from "./forget/forget.component";

export const routes: Routes = [
    {
        path: '', component: LoginComponentComponent
    },
    {
        path: 'forget', component: ForgetComponent
    },
    {
        path: 'register', component: SignUpComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
