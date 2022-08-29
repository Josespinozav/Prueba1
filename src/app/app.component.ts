import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mensajes Guardados', url: '/folder/Bookmarke', icon: 'bookmark' },
    { title: 'Chats Archivados', url: '/folder/Archived', icon: 'archive' },
    { title: 'Contactos', url: '/folder/People', icon: 'people' },
    { title: 'Ajustes', url: '/folder/Cog', icon: 'cog' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
