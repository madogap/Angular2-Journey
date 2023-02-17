import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = "Major";
  public idade: number = 35;
  public maisUm: number = 1;
  public interpolation: string = "Estudo de data binding - Interpolation";
  public propertyBinding: string = "Estudo de data binding - Property Binding";
  //Property Binding
  public checkDisable: boolean = false;
  public imgSrc: string = "";
  public imgTitle: string = "Property Binding";
  public position: { x: number, y: number } = { x: 0, y: 0 };
  constructor() { }
  ngOnInit(): void {

  }
  public alertaInfo(valor: string) {
    alert(valor)

  }
  public alertaInf(valor: MouseEvent) {
    console.log(valor);

  }
  public mouseMoveTeste(valor: MouseEvent) {

    this.position.x = valor.offsetX
    this.position.y = valor.offsetY

  }

}
