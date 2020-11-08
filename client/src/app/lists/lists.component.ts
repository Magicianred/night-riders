import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Partial<Member[]>;
  predicate = 'liked';

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadLiked();
  }

  loadLiked() {
    this.memberService.getLikes('liked').subscribe(response => {
      this.members = response;
    })
  }

  loadLikedBy() {
    this.memberService.getLikes('likedBy').subscribe(response => {
      this.members = response;
    })
  }

}
