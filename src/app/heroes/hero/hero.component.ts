import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 30;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = 'Mickey'
  }

  changeAge():void{
    this.age = 27
  }

  resetForm():void{
    this.name = 'Iroman'
    this.age = 30
  }


}
