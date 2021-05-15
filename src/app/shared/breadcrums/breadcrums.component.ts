import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { pipe, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit, OnDestroy {

  titulo: string;
  tituloSubs$ : Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getCurrentDocumentTitle()
                            .subscribe( res => {
                              this.titulo = res.titulo;
                              document.title = `Dashboard - ${this.titulo}`;
                            });
      }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getCurrentDocumentTitle ()  {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event :ActivationEnd) => !event.snapshot.firstChild ),
      map( (event :ActivationEnd) => event.snapshot.data)
    );
  }

}
