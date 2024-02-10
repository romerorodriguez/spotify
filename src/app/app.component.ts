import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'V. SpotiA-UTT'; //JavaScript titulo del inicio
  //tipos de datos y su estructuracion
  name: string= 'JRR' //TypeScript, variable de tipo 'name' de tipo 'string'
  age: number= 19 //al ser de tipo number no necesita de comillas
  phone: null= null
  phone1: undefined= undefined
  datum: any; //puede ser objeto o arreglo

  status: string | number | boolean = ''

  car: carModel= {
    brand: 'Ford', //el objeto se separa por comas
    model: 'Focus',
    year: 2023
  }

  //se declara la variable de tipo arreglo y su contenido sera de tipo any
  //contiene diferentes tipos de elementos
  listCars: Array<carModel>= [
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2022
    },
    {
      brand: 'BMW',
      model: 'AMG 200',
      year: 2023
    },
  ] //puede tener un numero, cadena, nulo, objeto, booleano, u otro arreglo
}

//Se utiliza el objeto carModel 
//con la interface carModel protege el "car: any", indica que el usuario no coloque un numero en brand o un booleano en model
interface carModel{
  //objetos
  brand: string, 
  model: string,
  year?: number //el ? significa que es opcional
}
