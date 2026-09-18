import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  user = input.required<User>();

  onEliminar = output<number>();

  eliminarClick() {
    this.onEliminar.emit(this.user().id);
  }
}
