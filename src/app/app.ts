import { Component, signal, WritableSignal, computed, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './interfaces/user.interfaces';
import { UserCard } from "./components/user-card/user-card";
import { Controls } from "./components/controls/controls";

@Component({
  imports: [RouterOutlet, UserCard, Controls],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('directorios');
  /* Propiedades/atributos (POO clasico)
  user: User = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    image: '',
  };
  */
  public users: WritableSignal<User[]> = signal([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "LeGra",
      "email": "legra@gmail.com",
      "image": "https://i.pravatar.cc/150?img=1"
    },
    {
      "id": 2,
      "name": "Carlos Mendoza",
      "username": "CarMen",
      "email": "cmendoza@yahoo.com",
      "image": "https://i.pravatar.cc/150?img=11"
    },
    {
      "id": 3,
      "name": "Sofia Reyes",
      "username": "SofiR",
      "email": "sreyes@hotmail.com",
      "image": "https://i.pravatar.cc/150?img=5"
    },
    {
      "id": 4,
      "name": "David Smith",
      "username": "DaveS",
      "email": "dsmith@gmail.com",
      "image": "https://i.pravatar.cc/150?img=12"
    },
    {
      "id": 5,
      "name": "Lucía Fernández",
      "username": "LuFer",
      "email": "lucia.fer@empresa.com",
      "image": "https://i.pravatar.cc/150?img=9"
    },
    {
      "id": 6,
      "name": "Mateo López",
      "username": "MattL",
      "email": "mlopez99@gmail.com",
      "image": "https://i.pravatar.cc/150?img=15"
    },
    {
      "id": 7,
      "name": "Elena Martínez",
      "username": "EleMar",
      "email": "elena.martinez@outlook.com",
      "image": "https://i.pravatar.cc/150?img=20"
    }
  ]);



  counterUser: Signal<number> = computed(() => this.users().length);
  orderByName() {
    this.users.update(users => users.sort((a, b) => a.name.localeCompare(b.name)));
  }

  orderById() {
    this.users.update(users => users.sort((a, b) => a.id - b.id));
  }

  reverseOrder() {
    this.users.update(users => users.reverse());
  }

  eliminarUsuario(id: number) {
    this.users.update(users => users.filter(user => user.id !== id));
  }
}
