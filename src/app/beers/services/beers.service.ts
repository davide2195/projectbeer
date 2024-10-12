import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap, switchMap } from 'rxjs';
import { BeerAPIResponse, Cocktail, SimpleBeer } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  public oneCocktail!: SimpleBeer;

  private http = inject(HttpClient)
  private url = 'https://thecocktaildb.com/api/json/v2/9973533/search.php?s='


  public getCocktails( strIngredient1?: string ): Observable<SimpleBeer[]> {
   return this.http.get<BeerAPIResponse>( this.url + strIngredient1).pipe(
      map( (resp:any) => {
        const simpleBeer: SimpleBeer[] = resp.drinks.map( (beer:any) => ({
          id: beer.idDrink,
          name: beer.strDrink,
          img: beer.strDrinkThumb,
          cat: beer.strCategory,
          tipo: beer.strAlcoholic
        }))

        return simpleBeer;
      }),

      // tap(console.log)
    )
  }


   getCocktailById( idDrink?: string) {
    return this.http.get<Cocktail>(`https://thecocktaildb.com/api/json/v2/9973533/search.php?s=${idDrink}`)
     .pipe(
       map( (resp) => resp.drinks[0])
     )
  }


}
