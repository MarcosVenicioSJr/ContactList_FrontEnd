import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  position: number;
  phone: string;
  mail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', phone: "123456789", mail: 'H'},
  {position: 2, name: 'Helium', phone: "123456789", mail: 'He'},
  {position: 3, name: 'Lithium', phone: "123456789", mail: 'Li'},
];

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [HeaderComponent, MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})

export class ContactListComponent {
  displayedColumns: string[] = ['position', 'name', 'phone', 'mail'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
