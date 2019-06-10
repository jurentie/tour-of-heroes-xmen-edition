import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }

  createDb() {
    const heroes = [
      {id: 11, name: 'Jean Gray'},
      {id: 12, name: 'Professor X'},
      {id: 13, name: 'Wolverine'},
      {id: 14, name: 'Cyclops'},
      {id: 15, name: 'Rogue'},
      {id: 16, name: 'Colossus'},
      {id: 17, name: 'Beast'},
      {id: 18, name: 'Nightcrawler'},
      {id: 19, name: 'Angel'},
      {id: 20, name: 'Banshee'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]) : number {
    return heroes.length > 0 ? Math.max(...heroes.map(her => her.id)) + 1 : 11;
  }
}
