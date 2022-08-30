import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'nuevo-grupo',
    loadChildren: () => import('./nuevo-grupo/nuevo-grupo.module').then( m => m.NuevoGrupoPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'llamadas',
    loadChildren: () => import('./llamadas/llamadas.module').then( m => m.LlamadasPageModule)
  },
  {
    path: 'personas-cerca',
    loadChildren: () => import('./personas-cerca/personas-cerca.module').then( m => m.PersonasCercaPageModule)
  },
  {
    path: 'mensajes-guardados',
    loadChildren: () => import('./mensajes-guardados/mensajes-guardados.module').then( m => m.MensajesGuardadosPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'invitar-amigos',
    loadChildren: () => import('./invitar-amigos/invitar-amigos.module').then( m => m.InvitarAmigosPageModule)
  },
  {
    path: 'aprender-sobre-telegram',
    loadChildren: () => import('./aprender-sobre-telegram/aprender-sobre-telegram.module').then( m => m.AprenderSobreTelegramPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
