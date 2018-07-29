import { ElementRef } from '@angular/core';
import { MentionModule } from './../../directives/mention/mention.module';
import { Component, Input, OnChanges, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnChanges {

  @ViewChild('mentionInput') myInput: ElementRef;


  items: string[] = [];
  trigger: string = "@";
  users: Array<any>;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    //this.items.push("Jorge");
    // this.items.push("Juancho")
    this.http.get("//").toPromise().then((res: Array<any>) => {
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

  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
}

  


}
