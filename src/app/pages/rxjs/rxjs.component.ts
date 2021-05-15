import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  miObservador : Subscription;
  constructor() {
    // this.createObservable().pipe(
    //   retry(2)
    // ).subscribe( 
    //   value => { console.log(value); },
    //   error => { console.error('There was an error ', error) },
    //   () => { console.warn('Completed!!'); }      
    // );

    this.miObservador = this.retonarIntervalo().subscribe( 
      valor => console.log(valor)
    );

  }
  ngOnDestroy(): void {
    this.miObservador.unsubscribe();
  }

  retonarIntervalo () : Observable<number> {
    const intervalo = interval(500).pipe( 
      map( valor => valor + 1 ),
      filter( valor => valor % 2 === 0)
      );

    return intervalo;
  }

  createObservable () : Observable<number> {
    let i = 0;

    const obs : Observable<number> = new Observable( (observer) => {

      const intervalo = setInterval(() => {

        observer.next(i);
        i++;

        if(i > 3){
          observer.error(i);
          i = 0;
        }

        if(i > 5){
          clearInterval(intervalo);
          observer.complete();
        }        
      }, 1000);

    });

    return obs;

  }

}
