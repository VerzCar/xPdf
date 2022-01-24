import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPdfmakePage } from './tab-pdfmake.page';

const routes: Routes = [
  {
    path: '',
    component: TabPdfmakePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
