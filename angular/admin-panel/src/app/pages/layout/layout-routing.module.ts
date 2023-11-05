import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/auth/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddNewComponent } from '../users/add-new/add-new.component';
import { UsersComponent } from '../users/users.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
      path: '', component: LayoutComponent,
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '', component: DashboardComponent
        },
        {
          path: 'users', component: UsersComponent
        },
        {
          path: 'users/add-new', component: AddNewComponent
        }
      ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
