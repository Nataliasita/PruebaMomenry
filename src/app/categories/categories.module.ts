import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDComponent } from './category-d/category-d.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './services/items.service';
import { ItemsListComponent } from './items-list/items-list.component';



@NgModule({
  declarations: [
    CategoryDComponent,
    HeaderComponent,
    ItemsComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoryDComponent
  ],
  providers:[ItemsService]
})
export class CategoriesModule {


 }
