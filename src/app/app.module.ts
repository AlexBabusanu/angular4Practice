import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MouseWheelDirective } from './shared/mousewheel.directive';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './work/navigation/navigation.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';



const appRoutes: Routes = [
  {path:"", component: WorkComponent},
  {path: "work/:id", component: WorkDetailComponent },
  {path:"about", component: AboutComponent},
  {path: "contact", component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MouseWheelDirective,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    WorkDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
