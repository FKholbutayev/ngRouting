import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES:Routes = [{
    path : '',
    component: DashboardComponent
}]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(ROUTES)
    ], 

    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule {
    
}