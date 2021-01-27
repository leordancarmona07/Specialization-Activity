import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SampleComponent } from '../sample/sample.component';
import { Person } from '../models';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServices } from '../Services/my-services.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{

  title = "Update Person Information";

  personForm: FormGroup;
  currentIndex: number;

  constructor(
    private router: Router,
    private personService: MyServices
    ) { }

  ngOnInit(): void {
    this.currentIndex = this.personService.currentIndex;
    console.log(this.currentIndex);
    const person = this.personService.getPerson(this.currentIndex);
    console.log(person);
    this.personForm = new FormGroup({
      firstName: new FormControl(person.firstname),
      lastName: new FormControl(person.lastname),
      age: new FormControl(person.age),
      nationality: new FormControl(person.nationality),
      gender: new FormControl(person.gender)
    })
  }

  updatePerson(person: Person){
    this.personService.updatePerson(this.currentIndex, person);
    this.router.navigate(['/person-list']);
  }

  cancelUpdatePerson(){
    this.router.navigate(['/person-list']);
  }
}
