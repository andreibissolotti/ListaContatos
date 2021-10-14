import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface contact {
  id: number,
  name: string,
  phone: string
}

const urlbase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  listContacts(){
    return this.http.get<contact[]>(`${urlbase}/contacts`);
  }

  retrieveContact(id: number){
    return this.http.get<contact>(`${urlbase}/contacts/${id}`);
  }

  createContact(contact: contact){
    return this.http.post<contact>(`${urlbase}/contacts`, contact);
  }

  updateContact(contact: contact){
    return this.http.put<contact>(`${urlbase}/contacts/${contact.id}`, contact);
  }

  deleteContact(id: number){
    return this.http.delete(`${urlbase}/contacts/${id}`)
  }
}
