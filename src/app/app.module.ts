import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {SharedModule} from "./modules/shared.module";
import { MemberCardComponent } from './members/member-card/member-card.component';
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {TabsModule} from "ngx-bootstrap/tabs";
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {NgxSpinnerModule} from "ngx-spinner";
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import {ButtonsModule} from "ngx-bootstrap/buttons";
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { TextInputComponent } from './forms/text-input/text-input.component';
import { DateInputComponent } from './forms/date-input/date-input.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    MemberMessagesComponent,
    TextInputComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TabsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ButtonsModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
