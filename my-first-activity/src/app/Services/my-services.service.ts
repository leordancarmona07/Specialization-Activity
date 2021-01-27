import { Injectable } from '@angular/core';
import { Person } from '../models'

@Injectable({
  providedIn: 'root'
})
export class MyServices {

  persons : Person[] = [
    { firstname : "Jaynard", lastname : 'Senilla', age : 20, nationality : "Filipino", gender : "Male"},
    { firstname : "Sernel", lastname : 'Asunto',  age : 21, nationality : "Filipino", gender : "Male"},
    { firstname : "Joseph John", lastname : 'Magallon', age : 22, nationality : "Filipino", gender : "Male"},
    { firstname : "Naruto", lastname : 'Uzumaki', age : 26, gender : "Male"},
    { firstname : "Junrey", lastname : 'Ansing', age : 28, nationality : "Filipino", gender : "Male"},
  ]
  
  currentIndex: number;

  constructor() { }

  getPersons(){
    return this.persons;
  }

  getPersonIndex(person: Person){
    return this.persons.indexOf(person);
  }

  getPerson(index: number){
    return this.persons[index];
  }

  addPerson(person: Person){
    this.persons.push(person);
  }

  deletePerson(person: Person){
    this.persons.splice(this.persons.indexOf(person), 1);
  }

  updatePerson(index: number, person: Person){
    this.persons[index] = person;
  }
}
