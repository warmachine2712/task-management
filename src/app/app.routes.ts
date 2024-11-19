import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { NgModule } from '@angular/core';
import { ListModelComponent } from './components/list-model/list-model.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './components/createTask/create-task/create-task.component';
export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'taskList',
                component: ListModelComponent
            },
            {
                path: 'createTask',
                component: CreateTaskComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }