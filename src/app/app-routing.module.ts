import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-page/main-page.module').then(x => x.MainPageModule)
  },
  {
    path: 'next-days',
    loadChildren: () => import('./next-days-page/next-days-page.module').then(x => x.NextDaysPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
