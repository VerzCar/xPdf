import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-jspdf',
        loadChildren: () => import('../tab-jspdf/tab-jspdf.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab-pdfmake',
        loadChildren: () => import('../tab-pdfmake/tab-pdfmake.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab-browser',
        loadChildren: () => import('../tab-browser/tab-browser.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-jspdf',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-jspdf',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
