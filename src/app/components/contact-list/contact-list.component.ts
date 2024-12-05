import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  contactList = [
    {
      Name: 'Marcos Venicio',
      Phone: '85987516774',
      Mail: 'marcos.venicio1239@hotmail.com',
    },
    {
      Name: 'Plaaaay',
      Phone: '85987516775',
      Mail: 'play@hotmail.com',
    },
    {
      Name: 'Bruno',
      Phone: '85917516775',
      Mail: 'bruno@hotmail.com',
    },
  ];
}
