import { Component, OnInit, Input } from '@angular/core';
import { SubjectStoreService } from '../../../services/subject-store.service'
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  constructor(private SubjectStoreService: SubjectStoreService) { }
  @Input() name: string;
  @Input() neeLe: number;
  @Input() phone: number;
  @Input() notifications: number = 1;
  @Input() prodv: string;
  @Input() index: number;
  selectedIndex = 0;

  ngOnInit() { }

}
