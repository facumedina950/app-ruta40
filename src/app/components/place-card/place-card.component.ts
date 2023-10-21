import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() titles:string = ""
  @Input() province:string = ""
  @Input() coordinates:string = ""
  @Input() poster:string = ""
  @Output() precio = new EventEmitter<string>();

  emitirPrecio(){
    this.precio.emit('1000')
  }

}
