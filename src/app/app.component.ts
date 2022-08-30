import { Component } from '@angular/core';
import { AprenderSobreTelegramPage } from './aprender-sobre-telegram/aprender-sobre-telegram.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nuevo grupo', url: '/folder/nuevo-grupo', icon: 'people' },
    { title: 'Contactos', url: '/folder/contactos', icon: 'person' },
    { title: 'Llamadas', url: '/folder/llamadas', icon: 'people' },
    { title: 'Personas cerca', url: '/folder/personas-cerca', icon: 'people-circle' },
    { title: 'Mensajes guardados', url: '/folder/mensajes-guardados', icon: 'bookmark' },
    { title: 'Ajustes', url: '/folder/ajustes', icon: 'cog' },
  ];
  public labels = ['Agregar contactos', 'Aprende sobre Telegram'];
  constructor() {}
}
