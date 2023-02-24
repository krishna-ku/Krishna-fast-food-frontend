import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class CommonModule { }
