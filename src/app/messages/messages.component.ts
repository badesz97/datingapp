import { Component, OnInit } from '@angular/core';
import {Message} from "../models/message";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  predicate = 'incoming'; // outgoing or incoming

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    this.messages = [];
    this.messageService.getMessages(this.predicate).subscribe(resp => {
     this.messages = resp;
    })
  }

}
