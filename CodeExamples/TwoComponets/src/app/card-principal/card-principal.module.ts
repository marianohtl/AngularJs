import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardSecondComponent } from '../card-second/card-second.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardSecondComponent,
    CardButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    CardSecondComponent,
    CardButtonComponent
  ]
})
export class CardPrincipalModule { }
