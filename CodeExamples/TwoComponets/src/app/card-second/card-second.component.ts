import { Component } from '@angular/core';

@Component({
  selector: 'app-card-second',
  templateUrl: './card-second.component.html',
  styleUrl: './card-second.component.scss'
})
export class CardSecondComponent {
  kittens = {
    infos:{
      tipo:'null',
      nome:"Poyoo"
    }
  }
}
