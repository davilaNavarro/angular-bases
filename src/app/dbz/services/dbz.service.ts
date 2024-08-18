import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    Id: uuid(),
    name: 'Mickey',
    power: 1000
  },
  {
    Id: uuid(),
    name: 'Ema',
    power: 2500
  },
  {
    Id: uuid(),
    name: 'Felicia',
    power: 3500
  }
];

onNewCharacter(character:Character):void{
  const newCharacter: Character = { Id: uuid(), ...character};

  this.characters.push(newCharacter);
}

// onDeleteCharacter(index:number){
//   this.characters.splice(index, 1);
// }

deleteCharacterById(id:string){
  this.characters = this.characters.filter(character => character.Id !== id);
}

}
