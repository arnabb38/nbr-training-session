import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
      path: '', component: LayoutComponent,
      children: [
        {
          path: '', component: DashboardComponent
        },
        {
          path: 'users', component: UsersComponent
        }
      ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
