import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  curScreen = 0;
  changeShownScreen(screen: number){
    console.log(screen);
    if(screen != 3)
    this.curScreen = screen;
    /*  window.open('https://www.instagram.com/f3hlalarm/?hl=de').focus();
    else
      this.curScreen = screen;*/
  }
}
