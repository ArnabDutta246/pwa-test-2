import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/theme/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {
  themeColor:string;
  constructor(private themeServ:ThemeService) { }

  ngOnInit() {
  }

  // change select theme
  changeSelectItem(e){
    console.log("selected theme color",this.themeColor);
    this.themeServ.activeTheme(this.themeColor);
  }

}
