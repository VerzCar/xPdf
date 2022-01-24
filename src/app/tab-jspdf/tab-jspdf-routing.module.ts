import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabJspdfPage } from './tab-jspdf.page';

const routes: Routes = [
  {
    path: '',
    component: TabJspdfPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
