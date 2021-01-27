import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models';
import { Router } from '@angular/router';
import { MyServices } from '../Services/my-services.service'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent  {
  @Input() person:Person;
  hidden = true;

  constructor(
    private personService: MyServices,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  showHide(){
    this.hidden = !this.hidden;
  }

  deletePerson(person: Person){
    this.personService.deletePerson(person);
  }

  viewUpdatePersonForm(person: Person){
    this.personService.currentIndex = this.personService.getPersonIndex(person);
    this.router.navigate(['/update-person']);
  }
  
}
