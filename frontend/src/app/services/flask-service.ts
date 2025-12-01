import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root',
})
export class FlaskService {
constructor(private http: HttpClient) {}
getProfilo() {
  return this.http.get('https://bug-free-space-fortnight-wrv7rrx9v49phvp9-5000.app.github.dev/profilo');
}
}