import { Component } from '@angular/core';
import { FoodData } from '../shared/model/FoodData';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  item!:FoodData;
  constructor(){}

}
