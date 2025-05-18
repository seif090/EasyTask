import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user! : User;
  @Input({required: true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath(){
    return 'assets/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // Add your component logic here



}
