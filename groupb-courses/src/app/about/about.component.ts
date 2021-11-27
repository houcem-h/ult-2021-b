import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user = {
    name: "Foulen Ben Foulen",
    age: "21",
    email: "foulen@example.com"
  };

  constructor() { }

  ngOnInit(): void {
  }

  public reverseName() {
    return this.user.name.split('').reverse().join('');
  }

  public changeUserName() {
    this.user.name = this.user.name == "Mohamed Ben Salah" ? "Foulen Ben Foulen" : "Mohamed Ben Salah";
  }

}
