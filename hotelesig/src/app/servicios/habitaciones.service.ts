import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(public peticion:HttpClient) {

    console.log("arrancamos a consumir el api con el servicio")
   }

   buscarHabitaciones():Observable<any>{
     console.log("estamos buscando...")
     return this.peticion.get("https://apihotelesig.herokuapp.com/hoteles/v1/habitaciones")
   }
}
