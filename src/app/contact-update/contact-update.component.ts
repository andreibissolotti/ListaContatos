import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })
  idString: string[];
  id: number;

  constructor(private cs: ContactsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.idString = paramMap.getAll('id');
      this.id = parseInt(this.idString[0])

      this.cs.retrieveContact(this.id).subscribe(contact =>{
        this.contactForm.reset(contact);
      })
    })
  }

  updateContact(){
    this.cs.updateContact({id: this.id, ...this.contactForm.value})
      .subscribe(contact => {
        this.contactForm.reset(contact);
      })
  }

}
