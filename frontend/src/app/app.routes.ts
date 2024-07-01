import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page',
    },
    {
        path: 'add',
        component: CreationFormComponent,
        title: 'Add Employee',
    },
    {
        path: 'edit/:id',
        component: EditFormComponent,
        title: 'Edit Employee'
    },
];
