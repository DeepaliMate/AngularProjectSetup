import { Component, OnInit } from '@angular/core';
import { SubjectStoreService } from '../../../services/subject-store.service';

@Component({
  selector: 'app-msg-card',
  templateUrl: './msg-card.component.html',
  styleUrls: ['./msg-card.component.css']
})
export class MsgCardComponent implements OnInit {

  constructor(private SubjectStoreService: SubjectStoreService) { }

  ngOnInit() {

  }

}
