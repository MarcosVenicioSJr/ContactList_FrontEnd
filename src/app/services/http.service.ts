import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../Interfaces/contacts.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>('https://localhost:44379/Contact').pipe(
      catchError((error) => {
        console.error('Erro ao buscar contatos:', error);
        return throwError(() => new Error('Erro ao buscar contatos'));
      })
    );
  }
  
  createContact(newContact: IContact){
    return this.httpClient.post<IContact>(
      'https://localhost:44379/Contact',
      newContact
    )
  }
}
