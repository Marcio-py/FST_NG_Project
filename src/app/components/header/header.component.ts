import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  constructor() {} // esse contstrutor roda quando um componente é inicializado

  ngOnInit() : void {
    // este metodo ajuda a dizer quando vamos rodar quando o componente carrega
  }

  toggleAddTask() {
    console.log('toggle')
  }
}
