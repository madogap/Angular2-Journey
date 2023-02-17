import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, id: number, idade: number }> = [
    { nome: "Major na G`Stack", id: 1, idade: 35 },
    { nome: "Major na atividade", id: 2, idade: 35 },
    { nome: "Major na qualidade", id: 3, idade: 35 },
  ]; //criando array de objeto que contem strings que sao itens
  constructor() { }
  public onClickListPush() {
    this.list.push({ nome: "Major O Major", id: 4, idade: 35 });
  }
  public mostrarEventList(event: MouseEvent) {
    console.log(event);
  }
  public onClickEventListDelete(event: number) {
    this.list.splice(event, 1);
  }



  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = !this.condition
      }
    }, 2000);
  }
  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = !this.conditionClick
    }
  }
}
