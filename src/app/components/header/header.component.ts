import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.ontToggle().subscribe( value => this.showAddTask = value)
  } // esse contstrutor roda quando um componente é inicializado

  ngOnInit() : void {
    // este metodo ajuda a dizer quando vamos rodar quando o componente carrega

  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
