import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise( ( resolve, reject ) => {
    //   if( false ) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Salio mal algo');
    //   }
    // });

    // promesa.then( ( msg ) => {
    //   console.log(msg);
    // })
    // .catch( (error) => {
    //   console.log(`ERROR ${error}`);
    // } )

    // console.log('fin del init');
    this.getUsuarios()
    .then( usuarios => console.log(usuarios) );
  }

  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then( result => result.json() )
      .then( body => resolve(body.data) )
    });

    fetch('https://reqres.in/api/users')
      .then( res => {
        res.json().then(
          body => console.log(body)
        )
      });
  }

}
