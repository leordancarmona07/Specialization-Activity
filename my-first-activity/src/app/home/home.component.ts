import { Component, OnInit } from '@angular/core';
import { Person } from '../models';
import { MyServices } from '../Services/my-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "List of Person";

  persons:Person[];

  constructor(
    private personService: MyServices,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
    console.log(this.persons);
  }

  viewAddPersonForm(){
    this.router.navigate(['/add-person']);
  }

}
