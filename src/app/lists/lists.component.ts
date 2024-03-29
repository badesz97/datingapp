import { Component, OnInit } from '@angular/core';
import {Member} from "../models/member";
import {MembersService} from "../../services/members.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Partial<Member[]>
  predicate = 'likedUsers';

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes(){
    this.memberService.getLikes(this.predicate).subscribe(resp=> {
      this.members = resp;
    })
  }

}
