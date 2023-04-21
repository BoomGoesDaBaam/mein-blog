import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output()
  changeScreen = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  loadScene(scene: number){
    this.changeScreen.emit(scene);
  }
}
