import { MentionModule } from './../../directives/mention/mention.module';
import { Component, Input, OnChanges } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnChanges {
  items: string[] = [];
  trigger: string = "@";
  users: Array<any>;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    //this.items.push("Jorge");
    // this.items.push("Juancho")
    this.http.get("http://api.voilacook.com/users").toPromise().then((res: Array<any>) => {
      console.log(res);
      this.users = res;
      this.users.forEach(user => {
        console.log(user.name);
        this.items.push(user.name)
      });
      console.log(this.items);
    });


  }

  ngOnChanges(changes) {
    console.log(changes)
  }

  


}
