import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contacts",
    component: ContactListComponent
  }
];
