import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServices } from '../Services/my-services.service';
import { Person } from '../models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title = "Add Person Information";

  firstName;
  lastName;
  age;
  nationality;
  gender;

  constructor(
    private router: Router,
    private personService: MyServices
    ) { }

  ngOnInit(): void {
  }

  viewPersonList(){
    this.router.navigate(['/person-list']);
  }

  addPerson(person: Person){
    this.personService.addPerson(person);
    this.router.navigate(['/person-list']);
  }



}
