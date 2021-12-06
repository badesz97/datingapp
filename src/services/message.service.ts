import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Message} from "../app/models/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMessages(predicate: string) {
    return this.http.get<Message[]>(this.baseUrl + 'messages?predicate=' + predicate);
  }

  getMessageThread(username: string){
    return this.http.get<Message[]>(this.baseUrl + 'messages/thread/' + username);
  }

  sendMessage(username: string, content: string) {
    return this.http.post<Message>(this.baseUrl + 'messages', {recipientUsername: username, content});
  }
}
