import { Component} from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  items=[]

  constructor(public itemService:ItemsService) { 
    console.log(itemService)

 }
}
