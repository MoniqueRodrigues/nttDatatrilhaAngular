import { Component, OnInit } from '@angular/core';
// import{ FormControl, FormGroup } from  '@angular/forms';
import { Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms';
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

onSubmit(){
  if(this.contactForm.valid){
    console.log("formulário valid");
    this.contactService.sendContact(this.contactForm.value).subscribe();
     
  }
  else{
    console.log("formulário inválid", this.contactForm.value);
  }
 
}

//validadores:
  contactForm = this.fb.group({
    name:['',
             [Validators.required,
             Validators.pattern('[A-Za-z]+')
    
  ]],

    email:['',
          [Validators.required,
           Validators.email
    ]],

    message:['',Validators.required]

  });

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  get name(){return this.contactForm.get("name") 
  }
  get email(){return this.contactForm.get("email") 
  }
  get message(){return this.contactForm.get("message") 
  }
  

}
