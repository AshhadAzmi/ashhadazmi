import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  emailAddress = 'azmii.ashhad@gmail.com'


  constructor(private titleService: Title) {
    this.titleService.setTitle('Ashhad - Contact');
  }

}
