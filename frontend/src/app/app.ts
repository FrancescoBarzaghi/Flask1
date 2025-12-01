import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlaskService } from './services/flask-service';
@Component({
selector: 'app-root',
imports: [RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
profilo = signal<any>({}); //signal per memorizzare il JSON ricevuto
constructor(private flaskService: FlaskService) {}
ngOnInit(): void {
//quando il componente si avvia chiama il service
this.flaskService.getProfilo().subscribe((dati) => {
this.profilo.set(dati); //aggiorna il signal con i dati ricevuti
console.log("Dati arrivati:", this.profilo());
});
}
}