import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';

import { TabslinksPage } from './tabslinks.page';

const routes: Routes = [
  {
    path: 'tabslinks',
    component: TabslinksPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },

      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: '',
        redirectTo:'/tabslinks/inicio',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo:'/tabslinks/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabslinksPageRoutingModule {}
