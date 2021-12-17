import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {
  themeColor:string;
  constructor() { }

  ngOnInit() {
  }

  // change select theme
  changeSelectItem(e){
    console.log("selected theme color",this.themeColor);
  }

}
