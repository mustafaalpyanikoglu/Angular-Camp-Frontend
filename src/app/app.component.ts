import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //component -> html'in datasını yönettiğimiz yer
  title: string = 'northwind';
  user: string = "Engin Demiroğ";
}
