import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, switchMap } from 'rxjs';
import { Cocktail } from '../../../beers/interfaces';
import { BeersService } from '../../../beers/services/beers.service';

@Component({
  selector: 'beer-page',
  standalone: true,
  imports: [],
  templateUrl: './beer-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BeerPageComponent implements OnInit {

  // public cocktail = signal<Cocktail | null>(null)
  private beerService = inject(BeersService)
  private route = inject(ActivatedRoute)

 public cocktail = toSignal(
  this.route.params.pipe(
    switchMap( ({ idDrink }) => this.beerService.getCocktailById(idDrink) )
  )
 )

  ngOnInit(): void {

  }







}


