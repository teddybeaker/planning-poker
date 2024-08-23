import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanningPokerService {
  private readonly backendUrl = 'http://localhost:3000';

  constructor(private httpService: HttpClient) {
  }

  getData(): Observable<string> {
    return this.httpService.get<string>(this.backendUrl);
  }
}
