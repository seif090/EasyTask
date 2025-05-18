import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id! : string;
  @Input({required: true}) avatar! : string;
  @Input({required: true}) name! : string;
  @Output() select = new EventEmitter<string>();
  get imagePath(){
    return 'assets/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }

  // Add your component logic here



}
