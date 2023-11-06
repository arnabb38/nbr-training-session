import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddNewComponent } from '../users/add-new/add-new.component';
import { UsersComponent } from '../users/users.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    UsersComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ],
  providers: []
})
export class LayoutModule { }
