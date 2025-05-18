import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Add your component properties here
  //selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);


  // Add your component methods here
  // get imagePath(){
  //   return 'assets/' + this.selectedUser.avatar
  // }
  imagePath = computed(() => ('assets/' + this.selectedUser().avatar));

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser .set(DUMMY_USERS[randomIndex]);
  }

  // Add your component logic here



}
