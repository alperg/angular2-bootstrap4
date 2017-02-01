import { Component } from '@angular/core';

class NavModel {
  constructor(public title: string, public link: any[]) { }
}

class UserModel {
  constructor(public name: string, public fullName: string, public email: string) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public menuItems: NavModel[] = [
    { title: 'Dashboard', link: ['/dashboard'] },
    { title: 'About', link: ['/about'] }
  ];

  public user: UserModel = {
    name: 'George',
    fullName: 'George West',
    email: 'george@west.com'
  };
}
