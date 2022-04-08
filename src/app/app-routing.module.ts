import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'scan',
    loadChildren: () => import("./scan/scan.module").then(m => m.ScanModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  // {
  //   path: '404',
  //   loadChildren: () => import("./error/error.module").then(m => m.ErrorModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
