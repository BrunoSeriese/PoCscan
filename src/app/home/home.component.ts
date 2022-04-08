import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  public submit(name: string, email: string, website:string, ownership:string) {
    console.log("submitted")
    console.log(ownership)
  }
}
