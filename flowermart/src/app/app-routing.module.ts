import { AppLayoutComponent } from './module/layout/app-layout/app-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./module/layout/layout.module').then(m => m.LayoutModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }