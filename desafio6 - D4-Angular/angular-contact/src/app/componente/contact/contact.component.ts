import { Component, OnInit } from '@angular/core';
// import{ FormControl, FormGroup } from  '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService} from '../../services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  _contact = {} as Contact;
  contacts: Contact[] = [];



onSubmit(): void {
  console.log(this.contactForm.value)
  this.contactService.onSubmit(this.contactForm.value).subscribe();
}


  contactForm = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    message:['',Validators.required]

  });

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
  }
}
