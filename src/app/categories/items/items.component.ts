import { Component} from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {
  more_options:Boolean =false;
  
  items=[]


  constructor(public itemService:ItemsService) { 
     console.log(itemService)

  }



}
