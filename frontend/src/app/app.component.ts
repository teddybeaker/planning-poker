import { Component } from '@angular/core';
import {PlanningPokerService} from "./services/planning-poker.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  backendData$: Observable<string>;

  constructor(private service: PlanningPokerService) {
    this.backendData$ = this.service.getData(); // TODO Figure out why I can't declare it above
  }

}
