import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './footer/player/player.component';
import {
  NbIconModule,
  NbCardModule,
  NbMenuModule,
  NbSearchModule,
  NbContextMenuModule,
  NbButtonModule,
  NbLayoutModule,
  NbUserModule,
  NbProgressBarModule,
  NbListModule,
  NbInputModule,
  NbTooltipModule,
  NbToggleModule
} from '@nebular/theme';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { ThemeComponent } from './header/theme/theme.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { MenuComponent } from './header/menu/menu.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    PlayerComponent,
    HeaderComponent,
    ThemeComponent,
    LogoComponent,
    SearchComponent,
    MenuComponent,
    ],
  imports: [
    CommonModule,
    NbIconModule,
    MatSliderModule,
    NbCardModule,
    NbMenuModule,
    NbSearchModule,
    NbContextMenuModule,
    NbButtonModule,
    NbLayoutModule,
    NbUserModule,
    NbProgressBarModule,
    NbListModule,
    NbInputModule,
    NbTooltipModule,
    NbToggleModule

  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    
    
  ]
})
export class ComponentsModule { }
