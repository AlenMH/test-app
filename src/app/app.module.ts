import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './my-material/my-material.module';
import {SidebarComponent} from './main/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {PublicationsViewComponent} from './main/publications-view/publications-view.component';
import {MomentPipe} from './pipes/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PublicationsViewComponent,
    SidebarComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
