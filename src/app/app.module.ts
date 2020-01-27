import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { OurHelpComponent } from './our-help/our-help.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SliderComponent,
    HelpComponent,
    HistoryComponent,
    SectionComponent,
    FooterComponent,
    OurHelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
