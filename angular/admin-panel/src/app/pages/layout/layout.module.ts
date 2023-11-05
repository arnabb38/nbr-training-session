import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddNewComponent } from '../users/add-new/add-new.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    UsersComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzNotificationModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    IconsProviderModule,
    LayoutRoutingModule
  ],
  providers: []
})
export class LayoutModule { }
