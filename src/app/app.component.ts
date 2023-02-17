import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <!--app-title *ngIf="destruir"></app-title>
  <button (click)="destruirComponent()">Butao</button>
  <br>
  <app-data-binding></app-data-binding-->
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet> `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public destruir: boolean = true
  constructor() { }
  public destruirComponent() {
    this.destruir = false
  }


  ngOnInit(): void {
    setTimeout(() => {
      console.log("OnInit Funcionando com sucesso");
    }, 3000)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
}
