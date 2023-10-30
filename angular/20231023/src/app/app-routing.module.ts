import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/home/product-detail/product-detail.component';

const routes: Routes = [
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'contact', component: ContactComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
      // loadComponent: () => import('./pages/home/home.component').then((com)=> com.HomeComponent)
    },
    {
      path: 'home/:id', component: ProductDetailComponent
    },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: '**', redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
