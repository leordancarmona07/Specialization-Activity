import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';




const routes: Routes = [
    { path: '', redirectTo: 'person-list', pathMatch: 'full'},
    { path: 'person-list', component: HomeComponent },
    { path: 'add-person', component: AddComponent},
    { path: 'update-person', component: UpdateComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }