import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necessário para [(ngModel)]
import { IContact } from '../../Interfaces/contacts.interface';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent {
  contact: IContact = {
    phone: '',
    mail: '',
    name: '',
  };

  constructor(private httpService: HttpService) {}

  createContact() {
    this.httpService.createContact(this.contact).subscribe(
      (response) => {
        console.log('Contato criado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao enviar contato:', error);
      }
    );
  }
}
