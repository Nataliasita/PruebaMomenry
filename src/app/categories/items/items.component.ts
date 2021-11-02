import { Component} from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {
  items=[]


  constructor(public itemService:ItemsService) { 
     console.log(itemService)

  }



}
