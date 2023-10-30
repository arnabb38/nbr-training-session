import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
