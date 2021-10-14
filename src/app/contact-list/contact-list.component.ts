import { Component, OnInit } from '@angular/core';
import { contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: contact[] = [];
  constructor(private cs: ContactsService) { }

  ngOnInit(): void {
    this.cs.listContacts().subscribe(contacts => {
      this.contacts=contacts
    })
  }

}
