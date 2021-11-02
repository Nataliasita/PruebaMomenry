import { Injectable } from '@angular/core';

@Injectable()

export class ItemsService {
    
    items:any[] = [
        {
          image:'../assets/PNG/imagen1.png',
          title:'Family at the Beach',
          description:'Created Dec 5',
          category:'family'
        },
        {
          image:'../assets/PNG/Imagen2.png',
          title:'Happy Family',
          description:'Created Jan 21',
          category:'travels'
        },
        {
          image:'../assets/PNG/Imagen3.png',
          title:'Donuts Campaign',
          description:'Created Jan 20',
          category:'meal'
        },
        {
          image:'../assets/PNG/Imagen4.png',
          title:'Teens Party',
          description:'Created Jan 19',
          category:'party'
        },
        {
          image:'../assets/PNG/Imagen5.png',
          title:'Graduation',
          description:'Created Jan 14',
          category:'family'
        },
        {
          image:'../assets/PNG/Imagen6.png',
          title:'Celebration',
          description:'Created Jan 5',
          category:'party'
        },
        {
          image:'../assets/PNG/Imagen7.png',
          title:'Dog Birthday',
          description:'Created Jan 3',
          category:'party'
        }
        
      ]
    

}