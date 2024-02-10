import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>, //objeto y arreglo
    accessLink: Array<any>
  } = {
    defaultOptions: [], //lo inicializamos aqui y colocamos [], indicando que son array
    accessLink: []
  }

  customOptions: Array<any> = []

  constructor() { }
  //angular al iniciar
  ngOnInit(): void { //se construiran el contenido de las variables 
    this.mainMenu.defaultOptions = [ //arreglo de objetos
      {
        name: 'Home',
        icon: 'uil uil-estate', //''
        router: ['/'] //arreglo de un elemeneto que apunta a raiz
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'] 
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'] //leva otro elemento de tipo string
      }
    ]

    this.mainMenu.accessLink = [
      {
        name : 'Crer lista',
        icon: 'uil-plus-square'
      }, 
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/']
      }, 
      {
        name: 'Mi lista °2',
        router: ['/']
      }, 
      {
        name: 'Mi lista °3',
        router: ['/']
      }, 
      {
        name: 'Mi lista °4',
        router: ['/']
      }
    ]
  }

}
