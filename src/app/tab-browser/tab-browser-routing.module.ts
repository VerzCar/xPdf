import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBrowserPage } from './tab-browser.page';

const routes: Routes = [
  {
    path: '',
    component: TabBrowserPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
