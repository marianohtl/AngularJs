import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  kitten_name = 'Delete'
  foto = "/umaFoto.png"
  cute = "";

  getName(){
    console.log("Get Name");

    return 'Nome do Gatinho:' + this.kitten_name
  }

  getKittenScore(){
   
    console.log("Timeout Finish");
    return this.cute = "+ 8000";
  }
}

