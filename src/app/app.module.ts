import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddNewRouteComponent } from './add-new-route/add-new-route.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EditworkoutComponent } from './editworkout/editworkout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewRouteComponent,
    EditworkoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
          path: 'addnewroute',
          component: AddNewRouteComponent
      },
      {
        path: 'editworkout',
        component: EditworkoutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
